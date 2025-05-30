// src/components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    isLoading?: boolean;
  }
  
  const Button = ({
    variant = 'primary',
    isLoading,
    children,
    ...props
  }: ButtonProps) => {
    const baseStyles = 'px-4 py-2 rounded-xl font-medium transition-all flex items-center gap-2';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
      danger: 'bg-red-600 text-white hover:bg-red-700',
    };
  
    return (
      <button
        {...props}
        className={`${baseStyles} ${variants[variant]} ${props.className || ''}`}
        disabled={isLoading || props.disabled}
      >
        {isLoading ? (
          <>
            <span className="animate-spin">⏳</span>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  };
  
  export default Button;