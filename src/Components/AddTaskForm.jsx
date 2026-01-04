import { useState } from "react";

export default function AddTaskForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [priority, setPriority] = useState(""); // "Low" | "Medium" | "High"

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    //we pass the title , subtitle and priority to the parent component
    onSubmit(title.trim(), subtitle.trim(), priority);
    //we reset the form fields
    setTitle("");
    setSubtitle("");
    setPriority("Medium");
  }

  const basePriorityClass =
    "flex-1 rounded-full border px-3 py-1.5 text-[11px] font-medium transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-xl border border-stone-200 bg-white px-3 py-3 shadow-sm
        transition-all duration-200 ease-out
      "
    >
      {/* Title */}
      <div className="mb-2">
        <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-stone-400">
          Title
        </label>
        <input
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write a clear task name..."
          className="
            w-full rounded-lg border border-stone-200 bg-stone-50/70 px-2.5 py-1.5 
            text-xs text-stone-900 placeholder:text-stone-400 
            focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-0
          "
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-stone-400">
          Description <span className="text-stone-300">(optional)</span>
        </label>
        <textarea
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          rows={2}
          placeholder="Add a short note or context..."
          className="
            w-full rounded-lg border border-stone-200 bg-stone-50/70 px-2.5 py-1.5 
            text-xs text-stone-900 placeholder:text-stone-400 
            focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-0
            resize-none
          "
        />
      </div>

      {/* Priority */}
      <div className="mb-3">
        <label className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-stone-400">
          Priority
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPriority("Low")}
            className={
              priority === "Low"
                ? basePriorityClass +
                  " bg-emerald-50 border-emerald-200 text-emerald-700"
                : basePriorityClass +
                  " bg-white border-stone-200 text-stone-500 hover:bg-stone-50"
            }
          >
            Low
          </button>
          <button
            type="button"
            onClick={() => setPriority("Medium")}
            className={
              priority === "Medium"
                ? basePriorityClass +
                  " bg-amber-50 border-amber-200 text-amber-700"
                : basePriorityClass +
                  " bg-white border-stone-200 text-stone-500 hover:bg-stone-50"
            }
          >
            Medium
          </button>
          <button
            type="button"
            onClick={() => setPriority("High")}
            className={
              priority === "High"
                ? basePriorityClass +
                  " bg-rose-50 border-rose-200 text-rose-700"
                : basePriorityClass +
                  " bg-white border-stone-200 text-stone-500 hover:bg-stone-50"
            }
          >
            High
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="
            rounded-full border border-stone-200 bg-white px-3 py-1.5 
            text-[11px] font-medium text-stone-500
            hover:bg-stone-50 transition
          "
        >
          Cancel
        </button>
        <button
          type="submit"
          className="
            rounded-full bg-stone-900 px-3.5 py-1.5 
            text-[11px] font-medium text-stone-50 
            shadow-sm hover:bg-stone-800 transition
            disabled:cursor-not-allowed disabled:bg-stone-300
          "
          disabled={!title.trim()}
        >
          Add task
        </button>
      </div>
    </form>
  );
}
