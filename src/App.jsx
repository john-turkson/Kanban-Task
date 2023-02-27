import { useState } from "react";

import { todos } from "./assets/index";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CardContainer from "./componets/CardContainer";

function App() {
  const [tasks, setTasks] = useState(todos);

  const updateTasks = (result) => {
    const source = result.source;
    const destination = result.destination;

    // Validate if destination is valid
    if (destination === undefined || destination === null) return null;

    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    const start = tasks[source.droppableId];
    const end = tasks[destination.droppableId];

    if (start === end) {
      const newTasksSet = start.tasks;

      const [reorderedItem] = newTasksSet.splice(source.index, 1);

      newTasksSet.splice(destination.index, 0, reorderedItem);

      switch (source.droppableId) {
        case "todo":
          setTasks({
            ...tasks,
            [source.droppableId]: {
              ...tasks.todo,
              tasks: newTasksSet,
            },
          });

          break;

        case "inProgress":
          setTasks({
            ...tasks,
            [source.droppableId]: {
              ...tasks.inProgress,
              tasks: newTasksSet,
            },
          });

          break;

        case "review":
          setTasks({
            ...tasks,
            [source.droppableId]: {
              ...tasks.review,
              tasks: newTasksSet,
            },
          });

          break;

        case "complete":
          setTasks({
            ...tasks,
            [source.droppableId]: {
              ...tasks.complete,
              tasks: newTasksSet,
            },
          });

          break;

        default:
          break;
      }
    } else {
      const newSourceTasks = start.tasks;
      const newEndTasks = end.tasks;

      const [reorderedItem] = newSourceTasks.splice(source.index, 1);

      newEndTasks.splice(destination.index, 0, reorderedItem);

    }
  };

  return (
    <div className="">
      <h1 className="p-8 flex justify-center items-center flex-col font-Jost text-5xl font-bold text-black">
        Kanban Board
      </h1>

      <div className="flex items-center justify-center h-[100vh] pb-40">
        <DragDropContext onDragEnd={updateTasks}>
          <div className="grid grid-cols-4 gap-8 py-8 w-full px-8">
            {Object.values(tasks).map((item) => (
              <CardContainer key={item.id} {...item} />
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
