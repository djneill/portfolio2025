interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl mx-auto text-center">{subtitle}</p>
      )}
    </div>
  );
}
