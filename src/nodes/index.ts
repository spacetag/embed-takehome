import { Position, type NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { NodeWithToolbar } from './NodeWithToolbar';
import { SinkNode } from './SinkNode';
import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  { id: 'a', type: 'position-logger', position: { x: 0, y: 0 }, data: { label: 'wire' } },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me!' },
  },
  {
    id: 'e',
    type: 'node-with-toolbar',
    position: { x: -100, y: -100 },
    data: { label: 'drag me!' , toolbarVisible: true, toolbarPosition: Position.Bottom },
  },
  {
    id: 'e',
    type: 'sink-node',
    position: { x: -100, y: -200 },
    data: { label: 'sink node' , toolbarVisible: true, toolbarPosition: Position.Bottom },
  },
  { id: 'c', type: 'position-logger', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
  {
    id: 'd',
    type: 'position-logger',
    position: { x: 0, y: 200 },
    data: { label: 'with React Flow' },
  },
];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'node-with-toolbar': NodeWithToolbar,
  'sink-node': SinkNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
