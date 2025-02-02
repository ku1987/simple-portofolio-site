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
      className="md:p-8 md:pr-28 py-6 relative block cursor-pointer hover:text-slate-400 underline"
      target={openInNewTab ? "_blank" : ""}
      href={url}
    >
      {title}
      <span className="absolute right-2 -bottom-2 md:bottom-auto md:right-0 md:top-2/4 md:-translate-y-1/2 block">
        {date}
      </span>
    </Link>
  );
}
