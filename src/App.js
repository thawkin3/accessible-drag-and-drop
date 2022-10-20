import React from 'react';
import { ReactSortableHOCDemo } from './components/react-sortable-hoc/ReactSortableHocDemo';
import { DndKitDemo } from './components/dnd-kit/DndKitDemo';
import { ReactDndDemo } from './components/react-dnd/ReactDndDemo';
import { ReactBeautifulDndDemo } from './components/react-beautiful-dnd/ReactBeautifulDndDemo';
import './App.css';

export const App = () => (
  <main>
    <h1>Accessible Drag and Drop</h1>
    <hr />
    <h2>
      <a
        href="https://github.com/clauderic/react-sortable-hoc"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-sortable-hoc
      </a>
    </h2>
    <ReactSortableHOCDemo />
    <hr />
    <h2>
      <a
        href="https://github.com/clauderic/dnd-kit"
        target="_blank"
        rel="noopener noreferrer"
      >
        dnd-kit
      </a>
    </h2>
    <DndKitDemo />
    <hr />
    <h2>
      <a
        href="https://github.com/react-dnd/react-dnd/"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-dnd
      </a>
    </h2>
    <ReactDndDemo />
    <hr />
    <h2>
      <a
        href="https://github.com/atlassian/react-beautiful-dnd"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-beautiful-dnd
      </a>
    </h2>
    <ReactBeautifulDndDemo />
  </main>
);
