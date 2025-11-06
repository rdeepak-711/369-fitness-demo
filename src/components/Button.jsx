/* Simple reusable button */
const base = "inline-flex items-center justify-center rounded font-semibold transition-all duration-300";
const variants = {
  primary: "bg-brand-red text-white hover:bg-[#b82030] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/30",
  secondary: "border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
  ghost: "text-brand-red hover:text-white hover:bg-brand-red/10",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3",
  lg: "px-8 py-4 text-lg",
};

const Button = ({ variant = 'primary', size = 'md', className = '', ...props }) => {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  return <button className={cls} {...props} />;
};

export default Button;


