interface SectionLabelProps {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-5 flex items-center gap-3 lg:mb-6">
      <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-cyan-300/0 via-cyan-300/80 to-cyan-200" />
      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-cyan-200/75">{children}</span>
      <span aria-hidden="true" className="size-1 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(165,243,252,0.85)]" />
    </div>
  )
}
