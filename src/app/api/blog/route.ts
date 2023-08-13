import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export async function GET(request: Request) {
  // Initializing a client
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: {
      property: "PublishedAt",
      date: {
        is_not_empty: true,
      },
    },
  });
  return NextResponse.json({ res });
}
