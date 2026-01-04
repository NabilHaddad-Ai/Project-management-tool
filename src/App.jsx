import React from "react";
import Sidebar from "./Components/Sidebar.jsx";
import KanbanColumn from "./Components/KanbanColumn.jsx";
import KanbanCard from "./Components/KanbanCard.jsx";
import { useState } from "react";



function App() {

  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 7);


  const [columns, setColumns] = useState({
  1: [],
  2: [],
  3: [],
});

    function AddItem(title, subtitle, priority) {
      const newKanban = {
        id: crypto.randomUUID(),
        title,
        subtitle: subtitle || "Newly added task",
        meta: { 
          owner: "You", 
          due: dueDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
          priority: priority,
        },
      };
        console.log(newKanban);
      setColumns((prevColumns) => ({
        ...prevColumns,
        1: [...prevColumns[1], newKanban], // always Backlog
      }));
    }


    function Delete(id) {
      console.log("deleting", id);
      console.log(id)
      setColumns((prevColumns) =>({
        ...prevColumns,
        1: prevColumns[1].filter(item => item.id !== id),
      }))
    }


    function Modify(id,title, subtitle , priority){
      setColumns((prevColumns) =>({
        ...prevColumns,
        1 : prevColumns[1].map((item) => item.id == id ? {...item, title: title, subtitle: subtitle, meta: { ...item.meta, priority: priority}} : item )
      }))
    }
    


    function Upgrade(id) {
      setColumns(prevColumns => {
      let fromKey = null;
      let itemToMove = null;

      // 1) Find which column currently has this task
      for (const key of Object.keys(prevColumns)) {
        const task = prevColumns[key].find(item => item.id === id);
        if (task) {
          fromKey = key;
          itemToMove = task;
          break;
        }
      }

      // If not found, return previous state
      if (!itemToMove) {
        console.warn("Task not found for id:", id);
        return prevColumns;
      }

      const from = Number(fromKey);

      // 2) If already in last column (3), do nothing
      if (from === 3) {
        console.log("Already in last column");
        return prevColumns;
      }

      const to = from + 1;

      // 3) Build new columns state immutably
      return {
        ...prevColumns,
        //Delete from old column 
        [from]: prevColumns[from].filter(item => item.id !== id),
        //Add to new column
        [to]: [...prevColumns[to], { ...itemToMove, row: to }],
      };
  });
}


  return (
    <div className="min-h-screen w-full bg-stone-100 overflow-hidden">
      {/* Sidebar + Content */}
      <div className="flex w-full h-screen">
        
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex flex-1 flex-col">
          
          {/* Top bar */}
          <div className="flex h-16 items-center justify-between border-b border-stone-200 bg-white/80 px-4 backdrop-blur">
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-stone-900">
                Product Roadmap
              </h1>
              <p className="text-[11px] text-stone-500">
                Kanban board for managing tasks.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <button className="rounded-full border border-stone-200 bg-white px-3 py-1.5 font-medium text-stone-700 shadow-sm hover:bg-stone-50 transition">
                + New task
              </button>
              <button className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 font-medium text-stone-500 hover:bg-stone-100 transition">
                Filter
              </button>
            </div>
          </div>

          {/* Kanban Board */}
          <div className="flex-1 overflow-auto px-4 py-6">
            <div className="grid gap-4 md:grid-cols-3 md:gap-6">

              {/* Backlog */}
                <KanbanColumn
                  title="Backlog"
                  row={1}
                  count={columns[1].length}
                  AddItem={AddItem}
                  canAdd={true}
                  
                >
                  {columns[1].map((item) => (
                    <KanbanCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      subtitle={item.subtitle}
                      lastrow={false}
                      Upgrade={Upgrade}
                      DeleteTask={Delete}
                      ModifyTask = {Modify}
                      row={1}
                      meta={{
                        priority : item.meta.priority,
                        owner: item.meta.owner,
                        due: item.meta.due,
                      }}
                    />
                  ))}
                </KanbanColumn>

                {/* In Progress */}
                <KanbanColumn
                  title="In Progress"
                  row={2}
                  count={columns[2].length}
                  AddItem={AddItem}
                  canAdd={false} 
                >
                  {columns[2].map((item) => (
                    <KanbanCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      subtitle={item.subtitle}
                      lastrow={false}
                      Upgrade={Upgrade}
                      row ={2}
                      meta={{
                        priority : item.meta.priority,
                        owner: item.meta.owner,
                        due: item.meta.due,
                      }}
                    />
                  ))}
                </KanbanColumn>

                {/* Done */}
                <KanbanColumn
                  title="Done"
                  row={3}
                  count={columns[3].length}
                  AddItem={AddItem}
                  canAdd={false} // 👈 no Add button
                >
                  {columns[3].map((item) => (
                    <KanbanCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      subtitle={item.subtitle}
                      lastrow={true}
                      row={3}
                      meta={{
                        priority : item.meta.priority,
                        owner: item.meta.owner,
                        due: item.meta.due,
                      }}
                    />
                  ))}
                </KanbanColumn>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;
