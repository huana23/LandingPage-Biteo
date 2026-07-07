function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', icon, iconRight, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const variants = {
    primary: 'bg-primary text-white shadow-sm hover:shadow-glow',
    secondary: 'bg-secondary text-text hover:shadow-sm',
    outline: 'border border-border bg-white text-text hover:border-primary hover:text-primary',
    ghost: 'bg-transparent text-primary hover:bg-primary/10',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && !iconRight ? <span className="material-symbols-outlined leading-none">{icon}</span> : null}
      {children}
      {iconRight ? <span className="material-symbols-outlined leading-none">{iconRight}</span> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}

export default Button;
