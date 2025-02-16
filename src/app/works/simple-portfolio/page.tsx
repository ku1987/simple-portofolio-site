import LinkText from "@/app/components/link-text";
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
      <h2>Simple Portfolio Site</h2>
      <h3>URL</h3>
      <LinkText
        target={true}
        name="https://keiusami.com"
        url="https://keiusami.com"
      />
      <h3>Architecture</h3>
      <Image
        src="/images/architecture.drawio.png"
        alt="Simple Portfolio Site Architecture"
        width={800}
        height={600}
      />
      <h3>Tech stacks</h3>
      <ul>
        <li>Next.js</li>
        <li>Terraform</li>
        <li>S3</li>
        <li>CloudFront</li>
        <li>GitHub Actions</li>
      </ul>
      <h3>GitHub</h3>
      <LinkText
        target={true}
        name="https://github.com/ku1987/simple-portofolio-site"
        url="https://github.com/ku1987/simple-portofolio-site"
      />
    </main>
  );
}
