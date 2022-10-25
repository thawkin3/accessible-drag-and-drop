import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const DndKitDemo1 = () => {
  const [items, setItems] = useState([
    'BoJack Horseman',
    'Diane Nguyen',
    'Mr. Peanutbutter',
    'Todd Chavez',
    'Sarah Lynn',
    'Princess Carolyn',
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getPosition = id => items.indexOf(id) + 1;
  const itemCount = items.length;

  const announcements = {
    onDragStart({ active }) {
      return `Picked up sortable item ${active.id}. Sortable item ${
        active.id
      } is in position ${getPosition(active.id)} of ${itemCount}`;
    },
    onDragOver({ active, over }) {
      if (over) {
        return `Sortable item ${
          active.id
        } was moved into position ${getPosition(over.id)} of ${itemCount}`;
      }
    },
    onDragEnd({ active, over }) {
      if (over) {
        return `Sortable item ${
          active.id
        } was dropped at position ${getPosition(over.id)} of ${itemCount}`;
      }
    },
    onDragCancel({ active }) {
      return `Dragging was cancelled. Sortable item ${active.id} was dropped.`;
    },
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
          content, and these instructions come with defaults out of the box or
          can be customized
        </li>
        <li>
          Screen reader announcements are made as you interact with the items
          (drag start, drag move, drag end, and drag cancel) (these instructions
          come with defaults out of the box or can be customized)
        </li>
        <li>
          Scrolls the window as you use the arrow keys, which is annoying. We
          could write our own event handler to override this behavior, but I
          would have expected the library to do this for us already.
        </li>
      </ul>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToParentElement, restrictToVerticalAxis]}
        accessibility={{ announcements }}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <ol className="cards-container">
            {items.map(id => (
              <SortableItem key={id} id={id} />
            ))}
          </ol>
        </SortableContext>
      </DndContext>
    </section>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};

const SortableItem = ({ id }) => {
  const {
    attributes,
    listeners,
    setActivatorNodeRef,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style} className="card">
      <span
        className="drag-handle"
        aria-label={`Drag handle for item: ${id}`}
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
      >
        ::
      </span>
      {id}
    </li>
  );
};
