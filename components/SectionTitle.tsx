type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
};

export function SectionTitle({
  title,
  subtitle,
  align = "start"
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={align === "center" ? "mx-auto mb-5 h-px w-16 bg-gradient-to-l from-novin-red to-novin-gold" : "mb-5 h-px w-16 bg-gradient-to-l from-novin-red to-novin-gold"} />
      <h2 className="text-3xl font-bold leading-[1.45] text-white md:text-[40px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base font-light leading-8 text-white/66 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
