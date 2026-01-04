function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-stone-200 bg-white/95 backdrop-blur">
      {/* Logo / Brand */}
      <div className="flex h-16 items-center gap-3 border-b border-stone-200 px-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-stone-200 bg-stone-50 text-xs font-semibold tracking-tight">
          KB
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-stone-900">
            Kanban Studio
          </span>
          <span className="text-xs text-stone-500">Workspace</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 text-sm">
        <div className="mb-3 px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400">
          Overview
        </div>
        <div className="space-y-1">
          <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-stone-600 hover:bg-stone-100 transition">
            Dashboard
          </button>
          <button className="flex w-full items-center justify-between rounded-xl border border-stone-200 bg-stone-100 px-3 py-2 text-left text-stone-900 shadow-sm">
            Boards <span className="rounded-full bg-white px-2 py-0.5 text-[11px] text-stone-500">4</span>
          </button>
          <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-stone-600 hover:bg-stone-100 transition">
            Calendar
          </button>
          <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-stone-600 hover:bg-stone-100 transition">
            Reports
          </button>
        </div>

        <div className="mt-8 mb-3 px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-stone-400">
          Projects
        </div>
        
      </nav>

      {/* User */}
      <div className="border-t border-stone-200 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-xs font-medium text-stone-700">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-stone-900">Alex Manager</span>
              <span className="text-[11px] text-stone-500">alex@company.com</span>
            </div>
          </div>
          <button className="rounded-full border border-stone-200 bg-white px-2 py-1 text-[11px] text-stone-500 hover:bg-stone-50 transition">
            ⋯
          </button>
        </div>
      </div>
    </aside>
  );
}



export default Sidebar;