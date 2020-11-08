import React, {useState} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import {Item} from '../Area';

type Props = {
    item: Item;
    index: number;
};

export default function DraggableItem({item, index}: Props) {
    const [isVisible, setIsVisible] = useState(false);

    function handleSetIsVisible() {
        setIsVisible((visible) => !visible);
    }

    return (
        <Draggable draggableId={item.id} index={index}>
            {(provided) => (
                <div
                    className="mb-2"
                    key={item.id}
                    ref={provided.innerRef}
                    onClick={handleSetIsVisible}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="bg-gray-100 p-2">{item.name}</div>
                    {isVisible ? <div className="p-2">{item.id}</div> : null}
                </div>
            )}
        </Draggable>
    );
}
