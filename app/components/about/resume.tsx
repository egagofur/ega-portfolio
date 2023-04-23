import Link from "next/link";

export default function Resume() {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
        Resume
      </h2>
      <div className="flex gap-2">
        <p className="tracking-tight text-zinc-400">You can read my resume</p>
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href="/pdf/resume.pdf"
        >
          here.
        </Link>
      </div>
    </>
  );
}
