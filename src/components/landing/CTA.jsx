import Button from "../ui/Button";

function CTA() {
  return (
    <section id="get-started" className="bg-white px-5 pb-5 sm:px-8">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-7 rounded-2xl bg-[#071019] px-6 py-10 text-center sm:px-10 lg:flex-row lg:py-9 lg:text-left">
        <div>
          <h2 className="text-2xl font-extrabold tracking-[-0.025em] text-white">Ready to start your journey?</h2>
          <p className="mt-2 text-sm text-slate-400">Join thousands of students building their future with Xpera.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="#top" className="min-w-[150px]">I’m a Student</Button>
          <Button href="#top" variant="secondary" className="min-w-[170px]">
            I’m an Organization
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTA;