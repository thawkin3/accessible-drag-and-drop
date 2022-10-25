import React from 'react';
import { DndKitDemo1 } from './DndKitDemo1';

export const DndKitDemos = () => (
  <>
    <h2>
      <a
        href="https://github.com/clauderic/dnd-kit"
        target="_blank"
        rel="noopener noreferrer"
      >
        dnd-kit
      </a>
    </h2>
    <h3>General Notes</h3>
    <ul>
      <li>Successor to react-sortable-hoc</li>
      <li>Overly complex</li>
      <li>
        Docs and examples are a nightmare (incomplete, vague, incorrect usage of
        their own API, poor practices and incorrect semantic HTML in the
        examples)
      </li>
    </ul>
    <DndKitDemo1 />
  </>
);
