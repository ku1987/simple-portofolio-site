import LinkButton from "./link-button";

export default function Header() {
  return (
    <header className="">
      <nav>
        <ul className="flex space-x-6 list-none">
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
