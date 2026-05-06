export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-950 px-8">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Joe Ferrucci
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Software Developer
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a
            href="https://www.linkedin.com/in/joeferrucci/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JoeFerrucci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
