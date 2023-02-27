import CardItem from "./CardItem";
import { Droppable } from "react-beautiful-dnd";

const CardContainer = ({ id, title, tasks }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="h-[675px] bg-zinc-300 rounded-md text-gray-700"
        >
          <div className="p-3">
            <p className="pb-4 font-Jost text-lg font-semibold">{title}</p>

            {tasks.map((task, index) => (
              <CardItem key={task.taskName} name={task.taskName} index={index} />
            ))}

            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default CardContainer;
