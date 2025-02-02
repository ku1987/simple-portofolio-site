import { Client } from "@notionhq/client";

import ArticleLink from "../components/article-link";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>Blog</h1>
      </div>
      <ol>
        <li>
          <ArticleLink
            url="https://tech.revcomm.co.jp/release-on-demand"
            title="(External) 本番リリースを週一から随時に変えるためにやったこと"
            date="2023-12-21"
            openInNewTab={true}
          />
        </li>
        <li>
          <ArticleLink
            url="https://tech.revcomm.co.jp/miitel-account-slo-en"
            title="(External) Methods for Measuring and Continuously Optimizing MiiTel Account's SLO"
            date="2023-10-31"
            openInNewTab={true}
          />
        </li>
        <li>
          <ArticleLink
            url="https://tech.revcomm.co.jp/miitel-account-slo-ja"
            title="(External) MiiTel AccountのSLO: 測定と継続的な最適化の方法"
            date="2023-10-31"
            openInNewTab={true}
          />
        </li>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <ArticleLink
                url={`/blog/${post.properties.Slug.rich_text[0].plain_text}--${post.id}`}
                title={post.properties.Name.title[0].text.content}
                date={post.properties.PublishedAt.date.start}
              />
            </li>
          );
        })}
        <li>
          <ArticleLink
            url="https://tech.revcomm.co.jp/sign-in-with-cognito-user-pool-using-oidc"
            title="(External) Cognito user pool で OpenID Connect を利用した外部 ID Provider によるサインインを実現する"
            date="2022-12-21"
            openInNewTab={true}
          />
        </li>
        <li>
          <ArticleLink
            url="https://tech.revcomm.co.jp/2022/02/09/frontend-i18n"
            title="(External) Webアプリケーションの国際化対応をバックエンドからフロントエンドに移行した話"
            date="2022-02-09"
            openInNewTab={true}
          />
        </li>
      </ol>
    </main>
  );
}

async function getPosts(): Promise<any[]> {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });
  return res.results;
}
