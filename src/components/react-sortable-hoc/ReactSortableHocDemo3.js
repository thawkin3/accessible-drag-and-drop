import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

export const ReactSortableHOCDemo3 = () => {
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
      <h3>Basic Usage (Keyboard Operable)</h3>
      <ul>
        <li>Entire item is draggable</li>
        <li>Can't select text</li>
        <li>
          Can tab to the item, hit Space to activate keyboard reordering, then
          move the item with the arrow keys, then complete the action with Space
          or cancel the action with Escape
        </li>
        <li>Not clear to screen reader users that the items are interactive</li>
        <li>
          No screen reader instructions or announcements as you interact with
          the items
        </li>
      </ul>
      <SortableList
        items={items}
        onSortEnd={onSortEnd}
        lockAxis="y"
        lockToContainerEdges
      />
    </>
  );
};

const SortableItem = SortableElement(({ value }) => (
  <li className="card" tabIndex={0}>
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
