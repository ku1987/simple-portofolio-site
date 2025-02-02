import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative md:absolute md:bottom-12 flex flex-col items-center w-auto h-4 right-2/4 translate-x-1/2 text-xs leading-6">
      <div>
        <p>Copyright © {new Date().getFullYear()} Kei Usami</p>
      </div>
      <Link href="/privacy">Privacy policy</Link>
    </footer>
  );
}
