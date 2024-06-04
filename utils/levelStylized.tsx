import { LevelType } from "@/types";

const levelStyle: { [key in LevelType]: string } = {
  beginner: "text-sky-500",
  intermediate: "text-yellow-500",
  advanced: "text-orange-500",
  expert: "text-rose-500",
};
const LevelStylized = ({
  level = "beginner",
  className,
}: {
  level: LevelType;
  className?: string;
}) => {
  return (
    <span
      className={`text-md capitalize font-medium ml-auto ${levelStyle[level]} ${className}`}
    >
      {level}
    </span>
  );
};

export default LevelStylized;
