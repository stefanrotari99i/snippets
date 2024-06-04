import { getSortedArticles } from "@/lib/articles";
import LevelStylized from "@/utils/levelStylized";
import { ChevronRight } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export default function Home() {
  const articles = getSortedArticles();

  console.log(articles);
  return (
    <main className="flex min-h-screen w-10/12 mx-auto flex-col items-center justify-between p-24">
      <section className="flex flex-col gap-3 w-full">
        {articles.map((article) => (
          <Link
            href={`/${article.id}`}
            key={article.id}
            className="flex items-strech bg-foreground  p-5 rounded-3xl justify-between w-full gap-10
            hover:ring-2 ring-neutral-800 transition-all duration-200 ease-in-out"
          >
            <div className="flex flex-col flex-1 w-full items-start gap-2">
              <span className="text-md font-bold text-primary/80">
                {article.title}
              </span>
              <p className="text-[13px] text-muted-foreground">
                {article.description}
              </p>

              <div className="flex items-center justify-between w-full mt-2">
                <div className="text-xs font-semibold flex items-center gap-2 text-muted-foreground/70">
                  <span>{moment(article.date).format("MMM Do YYYY")}</span>{" "}
                  &bull;
                  <span className="capitalize">{article.language}</span>
                </div>
                <LevelStylized level={article.level} className="text-xs" />
              </div>
            </div>
            <div className="w-12  border bg-background flex flex-col items-center justify-center border-neutral-500/30 rounded-3xl">
              <ChevronRight className="h-5 w-5 text-primary" />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
