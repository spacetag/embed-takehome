import type { Node, BuiltInNode, Position } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type NodeWithToolbar = Node<{ label: string, toolbarVisible: boolean, toolbarPosition: Position}, 'node-with-toolbar'>;
export type SinkNode = Node<{ label: string, toolbarVisible: boolean, toolbarPosition: Position, databaseProvider: DatabaseProvider}, 'sink-node'>;
export type DatasetNode = Node<{ label: string, sublabel: string, toolbarVisible: boolean, toolbarPosition: Position, databaseProvider: DatabaseProvider}, 'dataset-node'>;
export type SourceDatasetNode = Node<{ label: string, sublabel: string, toolbarVisible: boolean, toolbarPosition: Position, databaseProvider: DatabaseProvider}, 'source-dataset-node'>;
export type OperationNode = Node<{ label: string, toolbarVisible: boolean, toolbarPosition: Position, operationType: OperationType}, 'operation-node'>;
export type AppNode = BuiltInNode | PositionLoggerNode | NodeWithToolbar | SinkNode | DatasetNode | SourceDatasetNode | OperationNode;

export enum DatabaseProvider {
  Fileshare = 'fileshare',
  GoogleDrive = 'googledrive',
  RDS = 'rds',
}

export enum OperationType {
  Join = 'Join',
  Append = 'Append',
}