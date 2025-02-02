import Link from "next/link";

export default function LinkText({
  url,
  name,
  target = false,
}: {
  url: string;
  name: string;
  target?: boolean;
}) {
  if (target) {
    return (
      <Link
        target="_blank"
        className="cursor-pointer hover:text-slate-400 underline"
        href={url}
      >
        {name}
      </Link>
    );
  }
  return (
    <Link className="cursor-pointer hover:text-slate-400 underline" href={url}>
      {name}
    </Link>
  );
}
