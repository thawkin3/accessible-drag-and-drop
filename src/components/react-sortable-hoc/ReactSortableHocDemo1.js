import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

export const ReactSortableHOCDemo1 = () => {
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
      <h3>Basic Usage</h3>
      <ul>
        <li>Entire item is draggable</li>
        <li>Can't select text</li>
        <li>Not keyboard or screen reader accessible</li>
      </ul>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </>
  );
};

const SortableItem = SortableElement(({ value }) => (
  <li className="card">{value}</li>
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
