import React, {useState} from 'react';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import DragDropArea, {Item} from './Area';

type List = {
    rootIDs: Array<string>;
    items: {[id: string]: Item};
};

const initialList: List = {
    rootIDs: ['rootContainer-1', 'rootContainer-2', 'rootContainer-3'],
    items: {
        'rootContainer-3': {
            id: 'rootContainer-3',
            children: [],
        },
        'rootContainer-1': {
            id: 'rootContainer-1',
            children: ['container-1', 'container-2'],
        },
        'rootContainer-2': {
            id: 'rootContainer-2',
            children: ['container-3'],
        },
        'container-1': {
            id: 'container-1',
            name: 'Generators',
            children: ['child-1-1', 'child-1-2'],
        },
        'child-1-1': {id: 'child-1-1', name: 'Weather'},
        'child-1-2': {id: 'child-1-2', name: 'Travel'},
        'container-2': {
            id: 'container-2',
            name: 'Session',
            children: ['child-2-1', 'child-2-2', 'child-2-3'],
        },
        'child-2-1': {id: 'child-2-1', name: 'Sewers'},
        'child-2-2': {id: 'child-2-2', name: 'Random encounter'},
        'child-2-3': {id: 'child-2-3', name: 'NPC'},
        'container-3': {
            id: 'container-3',
            name: 'Utitilies',
            children: ['child-3-1'],
        },
        'child-3-1': {id: 'child-3-1', name: '5e rules'},
    },
};

function insert(arr: Array<string>, index: number, newItem: string) {
    return [...arr.slice(0, index), newItem, ...arr.slice(index)];
}

export default function DragDropContainer() {
    const [list, updateList] = useState(initialList);

    function handleOnDragEnd(result: DropResult) {
        const {destination, source, draggableId} = result;
        if (!destination) return;

        /**
         * Moving inside same container
         */
        if (source.droppableId === destination.droppableId) {
            const children = list.items[source.droppableId].children?.slice();
            if (!children) return;

            children.splice(children.indexOf(draggableId), 1);
            const newChildren = insert(children, destination.index, draggableId);

            const newItems = {
                ...list.items,
                [source.droppableId]: {
                    ...list.items[source.droppableId],
                    children: newChildren,
                },
            };

            return updateList((prevList) => ({...prevList, items: newItems}));
        }

        /**
         * Moving from one container to the other
         */
        const sourceChildren = list.items[source.droppableId].children?.slice();
        const destinationChildren = list.items[destination.droppableId].children?.slice();

        if (!sourceChildren || !destinationChildren) return;

        const newDestinationChildren = insert(destinationChildren, destination.index, draggableId);
        sourceChildren.splice(sourceChildren.indexOf(draggableId), 1);

        const newItems = {
            ...list.items,
            [source.droppableId]: {
                ...list.items[source.droppableId],
                children: sourceChildren,
            },
            [destination.droppableId]: {
                ...list.items[destination.droppableId],
                children: newDestinationChildren,
            },
        };

        updateList((prevList) => ({...prevList, items: newItems}));
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            {list.rootIDs.map((rootId) => (
                <DragDropArea item={list.items[rootId]} items={list.items} key={rootId} />
            ))}
        </DragDropContext>
    );
}
