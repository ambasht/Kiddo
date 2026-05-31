import Link from "next/link";
import Button from "@/components/ui/Button";

type Printable = {
  title: string;
  desc: string;
  age: string;
  slug: string;
};

type PrintableCardProps = {
  printable: Printable;
};

export default function PrintableCard({
  printable,
}: PrintableCardProps) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      
      {/* Preview */}
      <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-slate-400 text-sm font-medium">
        [WORKSHEET PREVIEW]
      </div>

      <div className="p-6">

        {/* Meta */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-slate-500">
            Age {printable.age}
          </span>

          <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full font-semibold">
            PDF
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-snug">
          {printable.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-slate-600 leading-relaxed text-sm">
          {printable.desc}
        </p>

        {/* Button */}
        <Link href={`/downloads/${printable.slug}`}>
          <Button>Download File</Button>
        </Link>

      </div>
    </div>
  );
}