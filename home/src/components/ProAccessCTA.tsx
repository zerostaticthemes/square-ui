import Link from 'next/link'

function ArrowUpRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

const BUY_URL = 'https://shadcndashboard.com'

export function ProAccessCTA() {
  return (
    <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
      <Link
        href={BUY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative isolate inline-flex items-center justify-center gap-2 rounded-full border border-amber-500/80 bg-amber-400 px-4 py-2 text-sm font-semibold text-amber-950 shadow transition-colors before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-amber-400 before:shadow after:absolute after:inset-0 after:-z-10 after:rounded-full hover:after:bg-white/25"
      >
        <span>Pro Templates on Shadcndashboard.com</span>
        <ArrowUpRightIcon className="size-4" />
      </Link>
    </div>
  )
}
