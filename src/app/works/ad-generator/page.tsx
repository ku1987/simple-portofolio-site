import LinkButton from "@/app/components/link-button";
import Image from "next/image";

export const metadata = {
  title: "Works | Kei Usami",
};

export default function WorkTitle() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>Works</h1>
      </div>
      <h2>AI ad generator</h2>

      <p>Generates texts from prompts.</p>
      <Image
        alt="Image generator"
        src="/videos/Image-generation.gif"
        width="600"
        height="415"
        className="my-4"
      />
      <p>Generates images from prompts.</p>
      <Image
        alt="Image generator"
        src="/videos/Image-generation.gif"
        width="600"
        height="415"
        className="my-4"
      />
      <p>Generates image variations from an existing image.</p>
      <Image
        alt="Image variations"
        src="/videos/Image-variation.gif"
        width="600"
        height="415"
        className="my-4"
      />
      <h3>Tech stacks</h3>
      <ul>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Open AI ChatCompletion API</li>
        <li>StableDiffusion API</li>
      </ul>
      <h3>GitHub</h3>
      <LinkButton
        target={true}
        name="https://github.com/ku1987/auto-ad-generator"
        url="https://github.com/ku1987/auto-ad-generator"
      />
    </main>
  );
}
