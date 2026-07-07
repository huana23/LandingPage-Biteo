function OfficeCard({ image, title, address, phone, badge }) {
  return (
    <div className="bg-white p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all border border-outline-variant/10">
      <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p className="text-subtext text-sm mb-4">{address}</p>
      <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center">
        <span className="text-xs font-bold uppercase tracking-widest text-secondary">{badge}</span>
        <span className="text-subtext text-sm">{phone}</span>
      </div>
    </div>
  );
}

export default OfficeCard;
