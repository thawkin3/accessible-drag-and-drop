import React from 'react';
import { ReactSortableHOCDemos } from './components/react-sortable-hoc';
import { DndKitDemos } from './components/dnd-kit';
import { ReactDndDemo } from './components/react-dnd/ReactDndDemo';
import { ReactBeautifulDndDemo } from './components/react-beautiful-dnd/ReactBeautifulDndDemo';
import './App.css';

export const App = () => (
  <main>
    <h1>Accessible Drag and Drop</h1>
    <hr />
    <ReactSortableHOCDemos />
    <hr />
    <DndKitDemos />
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
