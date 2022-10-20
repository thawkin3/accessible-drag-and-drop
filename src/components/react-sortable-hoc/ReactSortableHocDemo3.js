import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

export const ReactSortableHOCDemo3 = () => {
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
      <h3>Basic Usage (Keyboard Operable)</h3>
      <ul>
        <li>Entire item is draggable</li>
        <li>Can't select text</li>
        <li>Can tab to the item, hit Space to activate keyboard reordering, then move the item with the arrow keys, then complete the action with Space or cancel the action with Escape</li>
        <li>No screen reader announcements</li>
      </ul>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </>
  );
};

const SortableItem = SortableElement(({ value }) => (
  <li className="card" tabIndex={0}>{value}</li>
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
