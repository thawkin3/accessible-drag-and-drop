import React, { useState } from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

export const ReactSortableHOCDemo2 = () => {
  const [items, setItems] = useState([
    'BoJack Horseman',
    'Diane Nguyen',
    'Mr. Peanutbutter',
    'Todd Chavez',
    'Sarah Lynn',
    'Princess Carolyn',
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(items => arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <>
      <h3>With a Drag Handle</h3>
      <ul>
        <li>Only drag handle is draggable</li>
        <li>Can select text</li>
        <li>Not keyboard or screen reader accessible</li>
      </ul>
      <SortableList
        items={items}
        onSortEnd={onSortEnd}
        lockAxis="y"
        lockToContainerEdges
        useDragHandle
      />
    </>
  );
};

const DragHandle = SortableHandle(() => (
  <span className="drag-handle">::</span>
));

const SortableItem = SortableElement(({ value }) => (
  <li className="card">
    <DragHandle />
    {value}
  </li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ol className="cards-container">
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ol>
  );
});
