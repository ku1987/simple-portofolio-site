import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-12">
      <div className="flex flex-col items-center justify-between">
        <h1>Kei Usami</h1>
      <ul className="grid grid-cols-3 list-none w-72 justify-items-center p-0">
        <li>
          <Link target="_blank" className="cursor-pointer hover:opacity-80" href={"https://github.com/ku1987"}>
            <Image src="/icons/github-mark-white.svg" alt="GitHub" width="30" height="30"/>
          </Link>
        </li>
        <li>
          <Link target="_blank" className="cursor-pointer hover:opacity-80" href={"https://www.linkedin.com/in/kei-u-a93168205/"}>
            <Image src="/icons/linkedin-svgrepo-com.svg" alt="LinkedIn" width="30" height="30"/>
          </Link>
        </li>
        <li>
          <Link target="_blank" className="cursor-pointer hover:opacity-80" href={"https://example.com"}>
            <Image src="/icons/twitter-svgrepo-com.svg" alt="Twitter" width="30" height="30"/>
          </Link>
        </li>
      </ul>
      </div>
    </main>
  );
}
