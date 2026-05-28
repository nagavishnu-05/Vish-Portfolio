import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20",
  secondary: "bg-zinc-100 dark:bg-zinc-800 text-foreground hover:bg-zinc-200 dark:hover:bg-zinc-700",
  outline: "border border-zinc-200 dark:border-zinc-800 text-foreground hover:bg-zinc-50 dark:hover:bg-zinc-800",
  ghost: "hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-foreground",
};

const sizes = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-10 text-lg",
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl font-bold transition-all transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
