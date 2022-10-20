import React, { useState } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

export const ReactSortableHOCDemo4 = () => {
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(items => arrayMoveImmutable(items, oldIndex, newIndex));
  };

  return (
    <>
      <h3>With a Drag Handle (Keyboard Operable)</h3>
      <ul>
        <li>Only drag handle is draggable</li>
        <li>Can select text</li>
        <li>Can tab to the item drag handle, hit Space to activate keyboard reordering, then move the item with the arrow keys, then complete the action with Space or cancel the action with Escape</li>
        <li>No screen reader announcements</li>
      </ul>
      <SortableList items={items} onSortEnd={onSortEnd} useDragHandle />
    </>
  );
};

const DragHandle = SortableHandle(() => <span className="drag-handle" tabIndex={0}>::</span>);

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
