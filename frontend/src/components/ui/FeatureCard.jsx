function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="card-base p-6 lg:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-subtext">{description}</p>
    </div>
  );
}

export default FeatureCard;
