import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { getUserProfile } from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        async function getInitialSession() {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (session?.user) {
                    if (mounted) setUser(session.user);
                    const userProfile = await getUserProfile(session.user.id);
                    if (mounted) setProfile(userProfile);
                }
            } catch (error) {
                console.error("Error fetching session/profile:", error);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        getInitialSession();

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (session?.user) {
                    if (mounted) setUser(session.user);
                    // Only fetch profile if user just logged in or profile is missing
                    // Usually better to fetch on SIGN_IN
                    if (event === "SIGNED_IN" || !profile) {
                        try {
                            const userProfile = await getUserProfile(session.user.id);
                            if (mounted) setProfile(userProfile);
                        } catch (err) {
                            console.error("Error fetching profile on auth change:", err);
                        }
                    }
                } else {
                    if (mounted) {
                        setUser(null);
                        setProfile(null);
                    }
                }
                if (mounted) setLoading(false);
            }
        );

        return () => {
            mounted = false;
            authListener.subscription.unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = {
        user,
        profile,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}
