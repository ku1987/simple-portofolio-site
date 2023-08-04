"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Article({ params }: { params: any }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    document.title = "Article | Kei Usami";
    fetch(`/articles/${params.slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [params]);

  return (
    <main>
      <div className="flex flex-col items-center justify-between"></div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
