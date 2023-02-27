import React from "react";
import { Draggable } from "react-beautiful-dnd";

const CardItem = ({ name, index }) => {
  return (
    <Draggable draggableId={name} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps} className="p-6 m-3 rounded-md bg-slate-50 hover:bg-slate-100">
          <p className="font-Jost font-semibold text-xl">{name}</p>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
