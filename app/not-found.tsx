import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 px-6 py-16 text-slate-100">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
          404 Error
        </div>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          The route you tried does not exist, or it may have moved. Check the
          address or head back to safety.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:shadow-slate-900/50"
          >
            Go to homepage
          </Link>
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
            or
          </span>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:text-white"
          >
            Sign in
          </Link>
        </div>

        <div className="mt-14 w-full rounded-3xl border border-slate-700/60 bg-slate-900/70 p-6 text-left text-sm text-slate-300 shadow-2xl shadow-slate-950/40">
          <p className="font-semibold text-slate-100">Quick tips</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Double-check the URL for typos.</li>
            <li>Use the navigation links to get back on track.</li>
            <li>If this keeps happening, contact support.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
