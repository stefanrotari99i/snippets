import { Zap } from "lucide-react";
import Link from "next/link";

interface DownloadButtonProps {
  title: string;
  value: string;
  href?: string;
  icon?: React.ReactNode;
}

const DownloadButton = ({ title, value, href }: DownloadButtonProps) => {
  return (
    <Link
      href={href || "#"}
      className="flex items-center focus:outline-none focus:ring-2 focus:ring-accent justify-between border border-neutral-600/30 hover:ring-2 ring-neutral-600/30 transition-all duration-200 ease-in-out rounded-lg p-4 w-full mt-6"
    >
      <div className="flex flex-col items-start gap-1">
        <span className="text-white font-semibold text-md">{title}</span>
        <span className="text-muted-foreground font-semibold text-xs">
          {value}
        </span>
      </div>
      <Zap className="h-5 w-5 text-white" />
    </Link>
  );
};

export default DownloadButton;
