import React from "react";

const variantStyle = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-slate-500 hover:bg-slate-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const sizeClass = {
  small: "px-3 py-1 text-sm",
  medium: "px-5 py-2 text-base",
  large: "px-7 py-3 text-lg",
  expand: 'w-full py-2 text-base'
};

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
}) => {
  const hasIconAndText = Array.isArray(children) && children.length > 1;
  const iconClasses = hasIconAndText ? 'flex items-center gap-2' : '';
  
    const baseClass = 'rounded-lg font-semibold focus:outline-none transistion-all duriation-200 hover:cursor-pointer'
    const finalClass = `${baseClass} ${variantStyle[variant]} ${sizeClass[size]} ${iconClasses} ${disabled ? 'opacity-50 cursor-not-allowed': ''}`
  return <button className={finalClass} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
};

export default Button;
