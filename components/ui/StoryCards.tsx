import Link from "next/link";
import Button from "@/components/ui/Button";

type StoryCardProps = {
  title: string;
  desc: string;
  age: string;
  time: string;
  slug: string;
};

export default function StoryCard({
  title,
  desc,
  age,
  time,
  slug,
}: StoryCardProps) {
  return (
    
    <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      {/* Thumbnail */}
      <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-slate-400 text-sm font-medium">
        [STORY THUMBNAIL]
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <span>{age} Age</span>
          <span>{time} mins read</span>
        </div>

        <h3 className="text-2xl font-bold leading-snug">
          {title}
        </h3>

        <p className="mt-4 text-slate-600 leading-relaxed">
          {desc}
        </p>

        <Link href={`/stories/${slug}`}>
          <Button>Read Story</Button>
        </Link>
      </div>
    </div>
  
  );
}