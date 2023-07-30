import LinkButton from "./link-button";

export default function Header() {
  return (
    <header className="">
      <nav>
        <ul className="grid grid-cols-3 gap-4 justify-items-center list-none px-0 md:flex md:space-x-6 md:pl-1">
          <li>
            <LinkButton url="/" name="Home" />
          </li>
          <li>
            <LinkButton url="/about" name="About" />
          </li>
          <li>
            <LinkButton url="/blog" name="Blog" />
          </li>
          <li>
            <LinkButton url="/skills" name="Skills" />
          </li>
          <li>
            <LinkButton url="/career" name="Career" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
