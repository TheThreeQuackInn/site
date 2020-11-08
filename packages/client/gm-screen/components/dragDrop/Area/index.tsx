import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Card from '../../../../common/components/card';
import DraggableItem from '../DraggableItem';

type Props = {
    item: Item;
    items: {[id: string]: Item};
};

export type Item = {id: string; name?: string; children?: Array<string>};

export default function DragDropArea({item, items}: Props) {
    return (
        <div className="w-1/3 mr-8">
            {item.children?.map((childContainerId) => (
                <Card className="self-start p-1 mb-4" title={items[childContainerId].name || ''}>
                    <Droppable droppableId={items[childContainerId].id}>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {items[childContainerId].children?.map((childId, i) => (
                                    <DraggableItem item={items[childId]} index={i} key={childId} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </Card>
            ))}
        </div>
    );
}
