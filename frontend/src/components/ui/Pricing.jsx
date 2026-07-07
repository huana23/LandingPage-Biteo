import Button from './Button';

function PricingCard({ name, price, period, features, highlighted = false, cta = 'Đăng ký ngay' }) {
  return (
    <div
      className={`card-base p-6 lg:p-8 ${
        highlighted ? 'relative border-primary' : ''
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          Phổ biến nhất
        </span>
      )}
      <h3 className="text-lg font-semibold text-text">{name}</h3>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-bold text-text">{price}</span>
        <span className="mb-1 text-subtext">/{period}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-subtext">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'primary' : 'outline'}
        className="mt-8 w-full"
      >
        {cta}
      </Button>
    </div>
  );
}

function Pricing({ plans }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
    </div>
  );
}

export { Pricing, PricingCard };
export default Pricing;
