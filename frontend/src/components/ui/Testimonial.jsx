function Testimonial({ quote, name, role, avatar }) {
  return (
    <div className="card-base p-6 lg:p-8">
      <p className="text-lg leading-relaxed text-text">“{quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {avatar || name?.[0] || 'B'}
        </div>
        <div>
          <p className="text-sm font-semibold text-text">{name}</p>
          <p className="text-xs text-subtext">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
