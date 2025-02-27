interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,

  className = "",
  ...props
}) => {
  return (
    <button
      className={`w-full py-2 px-6 rounded-[10px] bg-mint cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
