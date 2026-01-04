import DropDownButton from "./DropDownButton";
import ModifyTaskForm from "./ModifyTaskForm";
import { useState } from "react";


export default function KanbanCard({ id, title, subtitle, meta, Upgrade, lastrow, row, DeleteTask, ModifyTask }) {

  const [isModify, setIsModify] = useState(false);

  function handleModifySubmit(title, subtitle, priority) {
    ModifyTask(id, title, subtitle, priority);
    setIsModify(false);
  }

  const priority = meta?.priority || "Medium";

  let priorityClasses =
    "border px-2 py-0.5 text-[10px] rounded-full uppercase tracking-[0.14em]";
  if (priority === "Low") {
    priorityClasses += " bg-emerald-50 border-emerald-200 text-emerald-700";
  } else if (priority === "High") {
    priorityClasses += " bg-rose-50 border-rose-200 text-rose-700";
  } else {
    // Medium
    priorityClasses += " bg-amber-50 border-amber-200 text-amber-700";
  }

  return (


    <article className="group rounded-xl border border-stone-200 bg-white px-3 py-3 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md">
      {isModify ? (
        <ModifyTaskForm
          onSubmit={handleModifySubmit}
          onCancel={() => setIsModify(false)}
          LastTitle={title}
          LastSubtitle={subtitle}
          lastPriority={priority}
        />
      ) : (
        <>
          <header className="mb-1.5 flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-medium text-stone-900">{title}</h4>
              {subtitle && (
                <p className="text-xs text-stone-500 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex flex-col items-end gap-1">
              {meta?.pill && (
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] uppercase text-stone-500 tracking-[0.14em]">
                  {meta.pill}
                </span>
              )}
              <span className={priorityClasses}>{priority}</span>
            </div>
          </header>

          <footer className="mt-2 flex items-center justify-between text-[11px] text-stone-400">
            {row === 1 &&
              <DropDownButton
                onModify={() => setIsModify(true)}
                onDelete={() => DeleteTask(id)}
              />
            }
            <div className="flex items-center gap-2">
              <span>{meta?.due}</span>
              {!lastrow && Upgrade && (
                <button
                  onClick={() => Upgrade(id)}
                  className="
                rounded-lg border border-stone-200 bg-stone-50 
                px-2.5 py-1 text-[11px] font-medium text-stone-600 
                shadow-sm hover:bg-stone-100 hover:text-stone-900 hover:shadow 
                transition
              "
                >
                  Move →
                </button>
              )}
            </div>
          </footer>
        </>
      )


      }

    </article>
  );
}
