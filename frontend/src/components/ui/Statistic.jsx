function Statistic({ value, label, suffix = '' }) {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold tracking-tight text-text md:text-5xl">
        {value}{suffix}
      </p>
      <p className="mt-2 text-subtext">{label}</p>
    </div>
  );
}

export default Statistic;
