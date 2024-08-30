import type { Node, BuiltInNode } from '@xyflow/react';

export type SinkNode = Node<{ label: string, databaseProvider: DatabaseProvider}, 'sink-node'>;
export type DatasetNode = Node<{ label: string, sublabel: string, databaseProvider: DatabaseProvider}, 'dataset-node'>;
export type SourceDatasetNode = Node<{ label: string, sublabel: string, databaseProvider: DatabaseProvider}, 'source-dataset-node'>;
export type OperationNode = Node<{ label: string, operationType: OperationType}, 'operation-node'>;
export type AppNode = BuiltInNode | SinkNode | DatasetNode | SourceDatasetNode | OperationNode;

export enum DatabaseProvider {
  Fileshare = 'fileshare',
  GoogleDrive = 'googledrive',
  RDS = 'rds',
}

export enum OperationType {
  Join = 'Join',
  Append = 'Append',
  Pivot = 'Pivot',
}