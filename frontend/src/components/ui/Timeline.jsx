import ScrollReveal from './ScrollReveal';

function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-4 w-px bg-border md:left-1/2" />
      <div className="space-y-10">
        {items.map((item, index) => (
          <ScrollReveal key={index} delay={index * 100}>
            <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
              <div
                className={`${
                  index % 2 === 0 ? 'md:text-right' : 'md:order-2'
                }`}
              >
                <p className="text-sm font-semibold text-primary">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-subtext">{item.description}</p>
              </div>

              <div className="hidden md:block" />

              <div className="absolute left-4 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-primary/10 md:left-1/2" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
