import { memo } from 'react';
import { Handle, Position, NodeToolbar, type NodeProps } from '@xyflow/react';
import { type NodeWithToolbar } from './types';
 
export function NodeWithToolbar({ data }: NodeProps<NodeWithToolbar>): any {
  return (
    <>
      <NodeToolbar isVisible={data.toolbarVisible} position={data.toolbarPosition}>
        <button>delete</button>
        <button>copy</button>
        <button>expand</button>
      </NodeToolbar>
 
      <div style={{ padding: '10px 20px', border: '2px solid grey', boxShadow: '2px 10px 8px rgba(0, 0, 0, .3)' }}>
        {data.label}
      </div>
 
      {/* <Handle type="target" position={Position.Top} /> */}
      <Handle type="source" position={Position.Right} style = {{background: 'white'}}/>
    </>
  );
};
 
export default memo(NodeWithToolbar);