import React from 'react';
import { ReactSortableHOCDemo1 } from './ReactSortableHocDemo1';
import { ReactSortableHOCDemo2 } from './ReactSortableHocDemo2';
import { ReactSortableHOCDemo3 } from './ReactSortableHocDemo3';
import { ReactSortableHOCDemo4 } from './ReactSortableHocDemo4';
import { ReactSortableHOCDemo5 } from './ReactSortableHocDemo5';

export const ReactSortableHOCDemos = () => (
  <>
    <h2>
      <a
        href="https://github.com/clauderic/react-sortable-hoc"
        target="_blank"
        rel="noopener noreferrer"
      >
        react-sortable-hoc
      </a>
    </h2>
    <h3>General Notes</h3>
    <ul>
      <li>Deprecated project</li>
      <li>
        Relies on the <code>findDOMNode</code> method
      </li>
      <li>
        Says it's accessible, but in reality it needs a lot of work from you to
        accomplish that
      </li>
      <li>Replaced by dnd-kit</li>
    </ul>
    <ReactSortableHOCDemo1 />
    <ReactSortableHOCDemo2 />
    <ReactSortableHOCDemo3 />
    <ReactSortableHOCDemo4 />
    <ReactSortableHOCDemo5 />
  </>
);
