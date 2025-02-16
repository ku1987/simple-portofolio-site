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
        href="/works/simple-portfolio"
        className="cursor-pointer hover:text-slate-400 mb-8 block"
      >
        <h2>Simple Portfolio Site</h2>
        <p>Static portfolio website.</p>
        <p>Build with Next.js (SSG), distributed by S3 and CloudFront.</p>
      </Link>
      <Link
        href="/works/ad-generator"
        className="cursor-pointer hover:text-slate-400 mb-8 block"
      >
        <h2>AI Ad Generator</h2>
        <p>Generates texts, images, and image variations from prompts.</p>
        <p>Build with Next.js, OpenAI API, and StableDiffusion API.</p>
      </Link>
    </main>
  );
}
