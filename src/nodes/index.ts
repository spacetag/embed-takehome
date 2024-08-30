import { Position, type NodeTypes } from '@xyflow/react';

import { SinkNode } from './SinkNode';
import { DatasetNode } from './DatasetNode';
import { SourceDatasetNode } from './SourceDatasetNode';
import { OperationNode } from './OperationNode';
import { AppNode, DatabaseProvider, OperationType } from './types';

export const initialNodes: AppNode[] = [
  {
    id: '10',
    type: 'source-dataset-node',
    sourcePosition: Position.Right,
    position: { x: 0, y: 0 },
    data: { label: 'Survey_2015', sublabel: '10 rules applied', databaseProvider: DatabaseProvider.Fileshare},
  },
  {
    id: '20',
    type: 'source-dataset-node',
    sourcePosition: Position.Right,
    position: { x: 0, y: 150 },
    data: { label: 'Survey_2016', sublabel: '10 rules applied', databaseProvider: DatabaseProvider.Fileshare},
  },
  {
    id: '30',
    type: 'source-dataset-node',
    sourcePosition: Position.Right,
    position: { x: 0, y: 300 },
    data: { label: 'Survey_2017', sublabel: '10 rules applied', databaseProvider: DatabaseProvider.GoogleDrive},
  },
  {
    id: '40',
    type: 'operation-node',
    position: { x: 200, y: 6 },
    data: { label: 'Join', operationType: OperationType.Join},
  },
  {
    id: '50',
    type: 'operation-node',
    position: { x: 200, y: 306 },
    data: { label: 'Append', operationType: OperationType.Append},
  },
  {
    id: '60',
    type: 'dataset-node',
    position: { x: 400, y: 0 },
    data: { label: 'Joineddataset', sublabel: '10 rules applied', databaseProvider: DatabaseProvider.Fileshare},
  },
  {
    id: '70',
    type: 'dataset-node',
    position: { x: 400, y: 300 },
    data: { label: 'Appenddata..', sublabel: '10 rules applied', databaseProvider: DatabaseProvider.Fileshare},
  },
  {
    id: '80',
    type: 'operation-node',
    position: { x: 600, y: 6 },
    data: { label: 'Pivot', operationType: OperationType.Pivot},
  },
  {
    id: '90',
    type: 'sink-node',
    position: { x: 600, y: 150 },
    data: { label: 'Appenddata..', databaseProvider: DatabaseProvider.RDS},
  },
  {
    id: '100',
    type: 'sink-node',
    position: { x: 600, y: 302 },
    data: { label: 'Appenddata..', databaseProvider: DatabaseProvider.Fileshare},
  },
  {
    id: '110',
    type: 'dataset-node',
    position: { x: 800, y: 0 },
    data: { label: 'Pivotdataset', sublabel: '10 rules applied', databaseProvider: DatabaseProvider.Fileshare},
  },
  {
    id: '120',
    type: 'sink-node',
    position: { x: 1000, y: 2},
    data: { label: 'Appenddata..', databaseProvider: DatabaseProvider.Fileshare},
  },
];

export const nodeTypes = {
  'sink-node': SinkNode,
  'operation-node': OperationNode,
  'dataset-node': DatasetNode,
  'source-dataset-node': SourceDatasetNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
