import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const variants = {
  default: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-zinc-100 text-zinc-900 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700",
  outline: "border-zinc-200 text-foreground dark:border-zinc-800",
  success: "bg-emerald-100 text-emerald-900 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800",
  warning: "bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
};

export function Badge({
  className,
  variant = 'default',
  ...props
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
