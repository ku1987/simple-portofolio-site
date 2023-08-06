import Link from "next/link";

export const metadata = {
  title: "Works | Kei Usami",
};

export default function Works() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>Works</h1>
      </div>
      <Link
        href="/works/ad-generator"
        className="cursor-pointer hover:text-slate-400"
      >
        <h2>AI ad generator</h2>
        <p>Generates texts, images, and image variations from prompts.</p>
        <p>Build with Next.js, OpenAI API, and StableDiffusion API.</p>
      </Link>
    </main>
  );
}
