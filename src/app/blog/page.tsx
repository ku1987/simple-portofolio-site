import ArticleLink from "../components/article-link";

export const metadata = {
  title: "Blog | Kei Usami",
};

export default function Blog() {
  // TODO: Fetch blog posts from API
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>Blog</h1>
      </div>
      <ol>
        <li>
          <ArticleLink
            url="https://tech.revcomm.co.jp/sign-in-with-cognito-user-pool-using-oidc"
            title="(External) Cognito user pool で OpenID Connect を利用した外部 ID Provider によるサインインを実現する"
            date="Dec 21 2022"
            openInNewTab={true}
          />
        </li>
        <li>
          <ArticleLink
            url="https://tech.revcomm.co.jp/2022/02/09/frontend-i18n"
            title="(External) Webアプリケーションの国際化対応をバックエンドからフロントエンドに移行した話"
            date="Feb 9 2022"
            openInNewTab={true}
          />
        </li>
        <li>
          <ArticleLink
            url="/blog/sample"
            title="(Sample) The Art of Debugging: Unraveling Software Mysteries"
            date="Jul 29 20XX"
          />
        </li>
        <li>
          <ArticleLink
            url="/blog/sample2"
            title="(Sample) Understanding the Power of React Hooks"
            date="Jul 28 20XX"
          />
        </li>
      </ol>
    </main>
  );
}
