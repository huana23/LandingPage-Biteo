function SectionTitle({ label, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {label && (
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mt-8 lg:mt-0">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {label}
        </span>
      )}
      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-[48px]">
        <span className={light ? 'text-white' : 'text-text'}>{title}</span>
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? 'text-white/80' : 'text-subtext'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
