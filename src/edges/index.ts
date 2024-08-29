import { MarkerType, type Edge, type EdgeTypes } from '@xyflow/react';

function createEdges(source: string, target: string): Edge {
  return {
    id: `${source}->${target}`, source, target, markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: '#53B177',
    }, style: { stroke: '#53B177', strokeWidth: 2 }
  };
}

export const initialEdges: Edge[] = [
  createEdges('10', '40'),
  createEdges('20', '40'),
  createEdges('30', '50'),
  createEdges('20', '50'),
  createEdges('40', '60'),
  createEdges('50', '70'),
  createEdges('60', '80'),
  createEdges('60', '90'),
  createEdges('70', '100'),
  createEdges('80', '110'),
  createEdges('110', '120'),
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
