import Button from "../ui/Button";

function CTA() {
  return (
    <section id="get-started" className="bg-white px-5 pb-16 sm:px-8 lg:px-12 sm:pb-24">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-10 rounded-[24px] bg-[#050C12] px-8 py-16 text-center shadow-[0_20px_60px_rgba(15,23,42,0.1)] sm:px-16 lg:flex-row lg:py-20 lg:text-left relative overflow-hidden border border-[#050C12]">

        {/* Glow for premium feeling */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-violet-600/[0.08] blur-[140px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl leading-tight">Ready to start your journey?</h2>
          <p className="mt-4 text-[17px] text-slate-400">Join thousands of students building their future with Xpera.</p>
        </div>
        <div className="relative z-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button href="#top" className="h-[44px] min-w-[150px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(217,244,90,0.15)] hover:shadow-[0_0_30px_rgba(217,244,90,0.3)]">I’m a Student</Button>
          <Button href="#top" variant="secondary" className="h-[44px] min-w-[170px] border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 shadow-none">
            I’m an Organization
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;