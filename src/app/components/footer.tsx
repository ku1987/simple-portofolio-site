import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute flex space-x-4 h-8 bottom-4 right-2/4 translate-x-1/2 text-xs">
      <div>
        <p>Copyright © 2023 Kei Usami</p>
      </div>
      <Link href="/privacy">Privacy policy</Link>
    </footer>
  );
}
