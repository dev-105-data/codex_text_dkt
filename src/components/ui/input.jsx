import { cn } from './utils.js'

export function Input({ className, ...props }) {
  return (
    <input
      className={cn('flex h-11 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950', className)}
      {...props}
    />
  )
}
