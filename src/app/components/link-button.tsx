import Link from "next/link";

export default function LinkButton({
  url,
  name,
}: {
  url: string;
  name: string;
}) {
  return (
    <Link className="cursor-pointer hover:text-slate-400" href={url}>
      {name}
    </Link>
  );
}
