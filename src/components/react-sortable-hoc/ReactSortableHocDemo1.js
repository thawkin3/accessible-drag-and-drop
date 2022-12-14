import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

export const ReactSortableHOCDemo1 = () => {
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
    <section>
      <h3>Basic Usage</h3>
      <ul>
        <li>Entire item is draggable</li>
        <li>Can't select text</li>
        <li>Not keyboard or screen reader accessible</li>
      </ul>
      <SortableList
        items={items}
        onSortEnd={onSortEnd}
        lockAxis="y"
        lockToContainerEdges
      />
    </section>
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
