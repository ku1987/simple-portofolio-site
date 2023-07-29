import ArticleLink from "../components/article-link";

export default function Blog() {
  return (
    <main className="p-12">
      <div className="flex flex-col items-center justify-between">
        <h1>Blog</h1>
      </div>
      <h2>Articles</h2>
      <ol>
        <li>
          <ArticleLink
            url="/blog/sample"
            title="(Sample) The Art of Debugging: Unraveling Software Mysteries"
            date="Jul 29 2023"
          />
        </li>
        <li>
          <ArticleLink
            url="/blog/sample2"
            title="(Sample) Understanding the Power of React Hooks"
            date="Jul 28 2023"
          />
        </li>
      </ol>
    </main>
  );
}
