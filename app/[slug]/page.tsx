import {
  Binary,
  ChevronLeft,
  DiamondMinus,
  DiamondPlus,
  SmilePlus,
  Terminal,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { getArticleData } from "@/lib/articles";
import { LevelType } from "@/types";
import LevelStylized from "@/utils/levelStylized";
import moment from "moment";
import Link from "next/link";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-screen-xl w-full flex items-start justify-between gap-8">
        <div className="w-2/3 flex flex-col items-start gap-2 mt-8">
          <Header date={articleData.date} />
          <ArticleContent contentHtml={articleData.contentHtml} />
          <FeedbackSection />
        </div>
        <Sidebar articleData={articleData} />
      </div>
    </main>
  );
};

const Header = ({ date }: { date: string }) => (
  <div className="flex items-center gap-4 justify-between w-full">
    <Button variant="outline" size="icon" asChild>
      <Link href="/components/button">
        <ChevronLeft className="h-5 text-white w-5" />
      </Link>
    </Button>
    <span className="text-xs text-muted-foreground/70 font-medium">
      {moment(date).format("MMM Do YYYY")}
    </span>
    <div className="flex items-center gap-2">
      <SmilePlus className="h-5 w-5 text-muted-foreground/70" />
      <span className="text-xs text-muted-foreground/70 font-medium">
        22 people found this helpful
      </span>
    </div>
  </div>
);

const ArticleContent = ({ contentHtml }: { contentHtml: string }) => (
  <article
    className="article"
    dangerouslySetInnerHTML={{ __html: contentHtml }}
  />
);

const FeedbackSection = () => (
  <div className="flex flex-col items-center bg-foreground p-6 rounded-3xl justify-center gap-3">
    <h4 className="text-2xl text-primary font-bold">You find this helpful?</h4>
    <p className="text-md text-center text-muted-foreground">
      Help us improve this article by providing feedback. Your feedback will
      help us improve the quality of our content. You can also report any issues
      you may encounter.
    </p>
    <div className="flex items-center justify-center gap-4 mt-6">
      <Button variant="default" size="lg" className="text-md ">
        Yes
      </Button>
      <Button variant="outline" size="lg" className="text-neutral-200">
        No
      </Button>
    </div>
  </div>
);

const Sidebar = ({ articleData }: { articleData: any }) => (
  <div className="w-1/3 sticky top-5 mt-10">
    <h1 className="text-3xl text-wrap font-bold text-primary mb-2">
      {articleData.title}
    </h1>
    <p className="text-md text-muted-foreground mb-6">
      {articleData.description}
    </p>
    <InfoCard articleData={articleData} />
    <Button variant="secondary" size="lg" className="text-md w-full mt-6">
      Copy Code
      <Zap className="h-5 w-5 ml-4" />
    </Button>
    <p className="text-xs text-center text-muted-foreground mt-3">
      Notice: Code may not be up to date or may not work as expected. We try to
      keep the code updated but sometimes it may not be.
    </p>
  </div>
);

const InfoCard = ({ articleData }: { articleData: any }) => (
  <div className="rounded-lg w-full p-6 bg-foreground text-primary-background">
    <div className="flex flex-col items-center justify-between gap-4">
      <Level level={articleData.level} />
      <ComponentInfo
        title="Code Lines"
        value={articleData.codeLines}
        icon={<Terminal size={22} />}
      />
      <ComponentInfo
        title="Language"
        value={articleData.language}
        icon={<Binary size={22} />}
      />
      <ComponentInfo
        title="Created"
        value={moment(articleData.date).format("MMM Do YYYY")}
        icon={<DiamondPlus size={22} />}
      />
      <ComponentInfo
        title="Modified"
        value={moment(articleData.modifiedAt).format("MMM Do YYYY") || "-"}
        icon={<DiamondMinus size={22} />}
      />
    </div>
  </div>
);

const ComponentInfo = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}) => (
  <div className="flex items-center justify-start gap-3 w-full">
    {icon && <span className="text-neutral-700">{icon}</span>}
    <span className="text-md text-muted-foreground/60 font-medium">
      {title}
    </span>
    <span className="text-sm capitalize text-muted-foreground/70 font-medium ml-auto">
      {value}
    </span>
  </div>
);

const Level = ({ level = "beginner" }: { level: LevelType }) => (
  <div className="flex items-center justify-start gap-3 w-full">
    <span className="text-neutral-700">
      <DiamondPlus size={22} />
    </span>
    <span className="text-md text-muted-foreground/60 font-medium">
      Difficulty Level
    </span>
    <LevelStylized level={level} />
  </div>
);

export default Article;
