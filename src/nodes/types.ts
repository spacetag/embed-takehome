import type { Node, BuiltInNode, Position } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type NodeWithToolbar = Node<{ label: string, toolbarVisible: boolean, toolbarPosition: Position}, 'node-with-toolbar'>;
export type SinkNode = Node<{ label: string, toolbarVisible: boolean, toolbarPosition: Position}, 'sink-node'>;
export type AppNode = BuiltInNode | PositionLoggerNode | NodeWithToolbar | SinkNode;
