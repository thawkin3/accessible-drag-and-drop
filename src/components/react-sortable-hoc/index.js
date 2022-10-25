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
    <ReactSortableHOCDemo1 />
    <ReactSortableHOCDemo2 />
    <ReactSortableHOCDemo3 />
    <ReactSortableHOCDemo4 />
    <ReactSortableHOCDemo5 />
  </>
);
