import { Client } from "@notionhq/client";

import { RenderBlock } from "./text";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });
  return res.results.map((post: any) => {
    return { slug: `${post.properties.Slug.rich_text[0].plain_text}--${post.id}` }
  });
}

export default async function Article({ params }: { params: { slug: string } }) {
  const slugParts = params.slug.split("--");
  const lastItem = slugParts[slugParts.length - 1];
  const post = await getPost(lastItem);

  return (
    <main>
      <div className="flex flex-col items-center justify-between"></div>
      {post.map((item) => (
        <RenderBlock key={item.id} block={item} />
      ))
      }
    </main>
  );
}


async function getPost(id: string): Promise<any[]> {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const res = await notion.blocks.children.list({
    block_id: id,
  });
  return res.results;
}

