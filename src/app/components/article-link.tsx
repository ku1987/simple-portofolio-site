import Link from "next/link";

export default function ArticleLink({
  url,
  title,
  date,
}: {
  url: string;
  title: string;
  date: string;
}) {
  return (
    <Link
      className="p-4 pr-28 relative block cursor-pointer hover:text-slate-400"
      href={url}
    >
      {title}
      <span className="absolute right-0	">{date}</span>
    </Link>
  );
}
