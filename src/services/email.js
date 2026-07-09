// Resend Email Integration using Supabase Edge Functions

import { supabase } from "./supabase";

/**
 * Sends a transactional email using Resend API via Edge Function.
 */
export async function sendTransactionalEmail({ to, subject, htmlContent }) {
    if (!supabase) {
        throw new Error("Supabase is not configured. Please set environment variables.");
    }

    const payload = {
        to,
        subject,
        htmlContent,
    };

    const { data, error } = await supabase.functions.invoke("resend-email", {
        body: payload,
    });

    if (error) {
        console.error("Edge function error:", error);
        throw new Error(error.message || "Failed to send email via Edge Function.");
    }

    return data;
}

/**
 * Base Vercel/Linear-Style Email Layout Generator
 * This acts as the reusable template structure for all transactional emails.
 */
function generateEmailLayout(title, content, footerText = "") {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light dark">
    <title>${title}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #fafafa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #171717;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fafafa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; border: 1px solid #eaeaea; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="padding: 32px 40px 24px; text-align: left;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td align="left" style="font-size: 24px; font-weight: 700; letter-spacing: -0.05em; color: #000000;">
                                        ◆ Xpera
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Divider -->
                    <tr>
                        <td style="padding: 0 40px;">
                            <div style="height: 1px; background-color: #eaeaea; width: 100%;"></div>
                        </td>
                    </tr>

                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 32px 40px 48px; text-align: left;">
                            ${content}
                        </td>
                    </tr>
                </table>
                
                <!-- Footer -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin-top: 32px;">
                    <tr>
                        <td align="center">
                            <p style="margin: 0 0 12px; font-size: 13px; color: #666666; line-height: 1.5;">
                                ${footerText || "You received this email because you are registered on Xpera."}
                            </p>
                            <p style="margin: 0 0 12px; font-size: 13px; color: #666666;">
                                <a href="mailto:support@xpera.app" style="color: #666666; text-decoration: underline;">Contact Support</a> &nbsp;•&nbsp; 
                                <a href="https://xpera.app" style="color: #666666; text-decoration: underline;">xpera.app</a>
                            </p>
                            <p style="margin: 0; font-size: 13px; color: #a3a3a3;">
                                © ${new Date().getFullYear()} Xpera, Inc.
                            </p>
                        </td>
                    </tr>
                </table>
                
            </td>
        </tr>
    </table>
</body>
</html>`;
}

/**
 * Welcome Email Template (Used during onboarding)
 */
export async function sendWelcomeEmail(userEmail, userName, role) {
    const roleDisplay = role === 'student' ? 'Student' : 'Organization';

    const content = `
    <h1 style="margin: 0 0 16px; font-size: 24px; font-weight: 600; color: #171717; letter-spacing: -0.02em;">Welcome to Xpera.</h1>
    <p style="margin: 0 0 24px; font-size: 16px; line-height: 26px; color: #404040;">
        Hi ${userName},<br><br>
        You are now officially verified as a <strong>${roleDisplay}</strong> on Xpera. We are building the foundational platform where exceptional talent meets high-growth opportunities.
    </p>

    <div style="background-color: #fafafa; border: 1px solid #eaeaea; border-radius: 6px; padding: 20px; margin-bottom: 32px;">
        <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 600; color: #171717; text-transform: uppercase; letter-spacing: 0.1em;">Next Steps</h3>
        <p style="margin: 0; font-size: 15px; line-height: 24px; color: #525252;">
            Complete your profile settings to ensure the highest visibility. Verified profiles receive priority curation in our internal matching engine.
        </p>
    </div>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
        <tr>
            <td align="left">
                <a href="https://xpera.app/dashboard" style="display: inline-block; padding: 12px 24px; background-color: #000000; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 500; border-radius: 6px;">
                    View Dashboard
                </a>
            </td>
        </tr>
    </table>
    
    <p style="margin: 0; font-size: 15px; line-height: 24px; color: #404040;">
        Welcome aboard,<br>
        <strong>The Xpera Team</strong>
    </p>
  `;

    return sendTransactionalEmail({
        to: [userEmail],
        subject: "Welcome to Xpera",
        htmlContent: generateEmailLayout("Welcome to Xpera", content)
    });
}

/**
 * Interview Invitation Email (Used when an org invites a student)
 */
export async function sendInterviewInviteEmail(candidateEmail, candidateName, projectName, timeSlot, orgName = "The Team") {
    const content = `
    <h1 style="margin: 0 0 16px; font-size: 24px; font-weight: 600; color: #171717; letter-spacing: -0.02em;">Interview Request</h1>
    <p style="margin: 0 0 32px; font-size: 16px; line-height: 26px; color: #404040;">
        Hi ${candidateName},<br><br>
        <strong>${orgName}</strong> has reviewed your application and would like to invite you for an interview regarding your candidacy.
    </p>

    <!-- Details Card -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px; background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 6px;">
        <tr>
            <td style="padding: 24px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td style="padding-bottom: 16px;">
                            <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">Opportunity</p>
                            <p style="margin: 0; font-size: 16px; font-weight: 500; color: #171717;">${projectName}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="border-top: 1px solid #eaeaea; padding-top: 16px;">
                            <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">Proposed Schedule</p>
                            <p style="margin: 0; font-size: 16px; font-weight: 500; color: #000000;">${timeSlot}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
        <tr>
            <td align="left">
                <a href="mailto:interviews@xpera.app?subject=Confirming ${encodeURIComponent(projectName)} Interview" style="display: inline-block; padding: 12px 24px; background-color: #000000; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 500; border-radius: 6px; margin-right: 12px;">
                    Confirm Interview
                </a>
                <a href="mailto:interviews@xpera.app" style="display: inline-block; padding: 12px 24px; background-color: #ffffff; color: #171717; text-decoration: none; font-size: 14px; font-weight: 500; border-radius: 6px; border: 1px solid #e5e5e5;">
                    Reply to Organization
                </a>
            </td>
        </tr>
    </table>
    
    <p style="margin: 0; font-size: 15px; line-height: 24px; color: #404040;">
        If you need to propose an alternative time, please use the reply action above.<br><br>
        Best regards,<br>
        <strong>Xpera Operations</strong>
    </p>
  `;

    return sendTransactionalEmail({
        to: [candidateEmail],
        subject: `Interview Invitation: ${projectName} via Xpera`,
        htmlContent: generateEmailLayout("Interview Invitation", content, `You received this email regarding your application to ${orgName}.`)
    });
}

/**
 * Generic Project Invitation Email (Used when an org invites a student to a private project)
 */
export async function sendProjectInvitation(candidateEmail, candidateName, projectName, orgName) {
    const content = `
    <h1 style="margin: 0 0 16px; font-size: 24px; font-weight: 600; color: #171717; letter-spacing: -0.02em;">Private Invitation</h1>
    <p style="margin: 0 0 32px; font-size: 16px; line-height: 26px; color: #404040;">
        Hi ${candidateName},<br><br>
        Based on your profile, <strong>${orgName}</strong> has invited you to view and apply for a direct opportunity.
    </p>

    <!-- Details Card -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px; background-color: #fafafa; border: 1px solid #eaeaea; border-radius: 6px;">
        <tr>
            <td style="padding: 24px;">
                <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #737373; text-transform: uppercase; letter-spacing: 0.1em;">Project Assignment</p>
                <p style="margin: 0; font-size: 18px; font-weight: 500; color: #171717;">${projectName}</p>
            </td>
        </tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 32px;">
        <tr>
            <td align="left">
                <a href="https://xpera.app/projects/invitations" style="display: inline-block; padding: 12px 24px; background-color: #000000; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 500; border-radius: 6px;">
                    View Project
                </a>
            </td>
        </tr>
    </table>
    
    <p style="margin: 0; font-size: 15px; line-height: 24px; color: #737373;">
        This invitation is exclusive to your account and cannot be forwarded.
    </p>
  `;

    return sendTransactionalEmail({
        to: [candidateEmail],
        subject: `Invitation to apply: ${projectName}`,
        htmlContent: generateEmailLayout("Project Invitation", content, `You received this exclusive invitation from ${orgName}.`)
    });
}
