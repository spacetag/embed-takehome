import { MarkerType, type Edge, type EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'a->c', source: 'a', target: 'c', animated: true },
  { id: 'b->d', source: 'b', target: 'e' },
  {
    id: 'c->d', source: 'c', target: 'd', markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: '#53B177',
  }, style: { stroke: '#53B177', strokeWidth: 2 }

  },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
