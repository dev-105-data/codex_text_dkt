import { cn } from './utils.js'

const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  default: 'bg-slate-100 text-slate-900 hover:bg-white',
  outline: 'border border-slate-300 bg-transparent text-slate-100 hover:bg-slate-100 hover:text-slate-900'
}

export function Button({ className, variant = 'default', ...props }) {
  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  )
}
