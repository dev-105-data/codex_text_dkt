import { cn } from './utils.js'

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn('flex min-h-[96px] w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950', className)}
      {...props}
    />
  )
}
