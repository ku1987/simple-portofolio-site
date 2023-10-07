"use client";

import { useEffect, useState } from "react";
import { Block, RenderBlock } from "./text";

type NotionResponse = {
  res: {
    block: {};
    has_more: boolean;
    next_cursor: {};
    object: string;
    results: Block[];
    type: string;
  };
};

export default function Article({ params }: { params: { slug: string } }) {
  const [content, setContent] = useState<React.JSX.Element[]>([]);
  const { slug } = params;

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((res) => res.json())
      .then((json: NotionResponse) => {
        const items = json.res.results.map((item) => (
          <RenderBlock key={item.id} block={item} />
        ));
        setContent(items);
      });

    document.title = "Article | Kei Usami";
  }, [slug]);

  return (
    <main>
      <div className="flex flex-col items-center justify-between"></div>
      {content}
    </main>
  );
}
