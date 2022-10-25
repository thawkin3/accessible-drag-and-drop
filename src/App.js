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
  </main>
);
