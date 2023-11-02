"use client";

import { useEffect, useState } from "react";
import ArticleLink from "../components/article-link";

type Page = {
  id: string;
  title: string;
  date: string;
};
export default function Blog() {
  const [pages, setPages] = useState<Page[]>([]);
  useEffect(() => {
    fetch(`/api/blog`)
      .then((res) => res.json())
      .then((json) => {
        const pageRes = json.res.results.map((page: any) => {
          return {
            id: page.id,
            title: page.properties.Name.title[0].text.content,
            date: page.properties.CreatedAt.date.start,
          };
        });
        setPages(pageRes);
      });
    document.title = "Blog | Kei Usami";
  }, []);

  return pages.length === 0 ? null : (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>Blog</h1>
      </div>
      <ol>
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
        {pages.map((page) => {
          return (
            <li key={page.id}>
              <ArticleLink
                url={`/blog/${page.id}`}
                title={page.title}
                date={page.date}
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
