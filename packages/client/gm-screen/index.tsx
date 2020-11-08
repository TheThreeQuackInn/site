import React from 'react';
import DragDrop from './components/dragDrop';

export default function GmScreen() {
    return (
        <div className="flex flex-row mt-8">
            <DragDrop />
            <div></div>
        </div>
    );
}
