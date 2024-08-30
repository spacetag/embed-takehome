import type { Node, BuiltInNode } from '@xyflow/react';

export type SinkNode = Node<{ databaseIndicatorState: DatabaseIndicatorState, databaseProvider: DatabaseProvider}, 'sink-node'>;
export type DatasetNode = Node<{ label: string, sublabel: string, databaseProvider: DatabaseProvider}, 'dataset-node'>;
export type SourceDatasetNode = Node<{ label: string, sublabel: string, databaseProvider: DatabaseProvider}, 'source-dataset-node'>;
export type OperationNode = Node<{ label: string, operationType: OperationType}, 'operation-node'>;
export type AppNode = BuiltInNode | SinkNode | DatasetNode | SourceDatasetNode | OperationNode;

export enum DatabaseIndicatorState {
  Normal = 'Normal',
  Dimmed = 'Dimmed',
  Error = 'Error',
}

export enum DatabaseProvider {
  Fileshare = 'Fileshare',
  GoogleDrive = 'Googledrive',
  RDS = 'Rds',
}

export enum OperationType {
  Join = 'Join',
  Append = 'Append',
  Pivot = 'Pivot',
}