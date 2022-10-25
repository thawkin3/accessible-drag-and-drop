import React, { useState } from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

export const ReactSortableHOCDemo5 = () => {
  const [items, setItems] = useState([
    'BoJack Horseman',
    'Diane Nguyen',
    'Mr. Peanutbutter',
    'Todd Chavez',
    'Sarah Lynn',
    'Princess Carolyn',
  ]);
  const [screenReaderAnnouncement, setScreenReaderAnnouncement] = useState('');

  const onSortStart = ({ node, index, collection, isKeySorting }) => {
    console.log('onSortStart', { node, index, collection, isKeySorting });
    setScreenReaderAnnouncement(`Starting to move item: ${node.textContent}.`);
  };

  const onSortOver = ({
    index,
    oldIndex,
    newIndex,
    collection,
    isKeySorting,
  }) => {
    console.log('onSortOver', {
      index,
      oldIndex,
      newIndex,
      collection,
      isKeySorting,
    });
    setScreenReaderAnnouncement(
      `Moving item from position ${oldIndex + 1} to position ${newIndex + 1}.`
    );
  };

  const onSortEnd = ({ oldIndex, newIndex, collection, isKeySorting }) => {
    setItems(items => arrayMoveImmutable(items, oldIndex, newIndex));
    console.log('onSortEnd', { oldIndex, newIndex, collection, isKeySorting });
    setScreenReaderAnnouncement(`Placed item in position ${newIndex + 1}.`);
  };

  return (
    <section>
      <h3>Keyboard and Screen Reader Accessible</h3>
      <ul>
        <li>Only drag handle is draggable</li>
        <li>Can select text</li>
        <li>
          Can tab to the item drag handle, hit Space to activate keyboard
          reordering, then move the item with the arrow keys, then complete the
          action with Space or cancel the action with Escape
        </li>
        <li>
          Has screen reader instructions to explain that this is draggable
          content
        </li>
        <li>
          Screen reader announcements are made as you interact with the items
          (drag start, drag move, and drag end)
        </li>
      </ul>
      <p className="screen-reader-text" id="drag-and-drop-instructions">
        Drag and drop instructions. Press the Space key on any item's drag
        handle to activate the item. Press the Up or Down arrow keys to move the
        item. Press Space to confirm moving the item to the new position or
        Escape to cancel moving the item.
      </p>
      <div
        aria-live="assertive"
        aria-atomic="true"
        aria-relevant="all"
        className="screen-reader-text"
      >
        {screenReaderAnnouncement}
      </div>
      <SortableList
        items={items}
        onSortStart={onSortStart}
        onSortOver={onSortOver}
        onSortEnd={onSortEnd}
        lockAxis="y"
        lockToContainerEdges
        useDragHandle
      />
    </section>
  );
};

const DragHandle = SortableHandle(({ value }) => (
  <span
    className="drag-handle"
    tabIndex={0}
    role="button"
    aria-label={`Drag handle for item: ${value}`}
  >
    ::
  </span>
));

const SortableItem = SortableElement(({ value }) => (
  <li className="card">
    <DragHandle value={value} />
    {value}
  </li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ol
      className="cards-container"
      aria-describedby="drag-and-drop-instructions"
    >
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ol>
  );
});
