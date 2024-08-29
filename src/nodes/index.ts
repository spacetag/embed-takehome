import { Position, type NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { NodeWithToolbar } from './NodeWithToolbar';
import { SinkNode } from './SinkNode';
import { DatasetNode } from './DatasetNode';
import { AppNode, DatabaseProvider } from './types';

export const initialNodes: AppNode[] = [
  {
    id: 'a0',
    type: 'dataset-node',
    position: { x: 100, y: -300 },
    data: { label: 'sink node' , toolbarVisible: true, toolbarPosition: Position.Bottom, databaseProvider: DatabaseProvider.Fileshare},
  },
  { id: 'a', type: 'position-logger', position: { x: 0, y: 0 }, data: { label: 'wire' } },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me b!' },
  },
  {
    id: 'c',
    type: 'node-with-toolbar',
    position: { x: -100, y: -100 },
    data: { label: 'drag me c!' , toolbarVisible: true, toolbarPosition: Position.Bottom },
  },
  {
    id: 'd',
    type: 'sink-node',
    position: { x: 100, y: -100 },
    data: { label: 'sink node' , toolbarVisible: true, toolbarPosition: Position.Bottom, databaseProvider: DatabaseProvider.Fileshare},
  },
  { id: 'e', type: 'position-logger', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
  {
    id: 'f',
    type: 'position-logger',
    position: { x: 0, y: 200 },
    data: { label: 'with React Flow' },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'node-with-toolbar': NodeWithToolbar,
  'sink-node': SinkNode,
  'dataset-node': DatasetNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
