import Link from "next/link";

export default function ArticleLink({
  url,
  title,
  date,
  openInNewTab = false,
}: {
  url: string;
  title: string;
  date: string;
  openInNewTab?: boolean;
}) {
  return (
    <Link
      className="p-8 pr-28 relative block cursor-pointer hover:text-slate-400"
      target={openInNewTab ? "_blank" : ""}
      href={url}
    >
      {title}
      <span className="absolute right-0	top-2/4	-translate-y-1/2">{date}</span>
    </Link>
  );
}
