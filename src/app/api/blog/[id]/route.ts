import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const res = await notion.blocks.children.list({
    block_id: id,
  });
  return NextResponse.json({ res });
}
