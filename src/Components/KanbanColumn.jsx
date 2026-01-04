import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

function KanbanColumn({
  title,
  row,
  count,
  children,
  AddItem,
  canAdd = true,
}) {
  const [isAdding, setIsAdding] = useState(false);

  function handleAddSubmit(title, subtitle, priority) {
    AddItem(title, subtitle, priority); 
    setIsAdding(false);
  }
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-stone-200 bg-stone-50/60 p-3 shadow-sm">
      {/* Column header */}
      <header className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
            {title}
          </span>
          <span className="text-[11px] text-stone-400">
            {count} {count === 1 ? "task" : "tasks"}
          </span>
        </div>

        {canAdd && (
          <button
            onClick={() => setIsAdding((prev) => !prev)}
            className="
              rounded-full border border-stone-200 bg-white px-2.5 py-1 
              text-[11px] font-medium text-stone-600 shadow-sm 
              hover:bg-stone-50 transition
            "
          >
            {isAdding ? "Close" : "+ Add"}
          </button>
        )}
      </header>

      {/* Smooth add form area */}
      <div
        className={`
        overflow-hidden transition-all duration-200 ease-out
        ${isAdding 
            ? "opacity-100 translate-y-0 max-h-[300px] mb-2" 
            : "opacity-0 translate-y-0 max-h-0 mb-0 pointer-events-none"
        }
        `}
    >
        {isAdding && (
        <AddTaskForm
            onSubmit={handleAddSubmit}
            onCancel={() => setIsAdding(false)}
        />
        )}
    </div>

      {/* Existing tasks */}
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

export default KanbanColumn;
