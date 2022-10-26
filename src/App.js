import React from 'react';
import { ReactSortableHOCDemos } from './components/react-sortable-hoc';
import { DndKitDemos } from './components/dnd-kit';
import { ReactDndDemos } from './components/react-dnd';
import { ReactBeautifulDndDemos } from './components/react-beautiful-dnd';
import './App.css';

export const App = () => (
  <main>
    <h1>Accessible Drag and Drop</h1>
    <hr />
    <ReactSortableHOCDemos />
    <hr />
    <DndKitDemos />
    <hr />
    <ReactDndDemos />
    <hr />
    <ReactBeautifulDndDemos />
    <hr />
    <section>
      <h2>Main Takeaways</h2>
      <ol>
        <li>
          Drag and drop functionality is inherently inaccessible because it
          requires the use of a mouse and fine motor control.
        </li>
        <li>
          Drag and drop functionality needs to be accessible for mouse users,
          keyboard users, and screen reader users.
        </li>
        <li>
          Keyboard users should be able to activate drag and drop mode and use
          the arrow keys to move items.
        </li>
        <li>
          Screen reader users should have adequate instructions and
          communication to know how to interact with the drag and drop
          functionality and also to know what is happening throughout the
          interaction.
        </li>
        <li>
          There are many third-party libraries that implement drag and drop
          functionality, all with varying levels of accessibility support.
        </li>
      </ol>
    </section>
  </main>
);
