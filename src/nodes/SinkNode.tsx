import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type SinkNode } from './types';
import { BsHddNetwork } from 'react-icons/bs';
 
export function SinkNode({ data }: NodeProps<SinkNode>): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px 10px', lineHeight: '0.7px', borderRadius: '24px', border: '1px solid #e7e7e7', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px' }}>
        <BsHddNetwork color="grey" />
      </div>
 
      <Handle type="target" position={Position.Left} style = {{borderColor: '#0000', background: '#0000'}}/>
      {/* <Handle type="source" position={Position.Right} style = {{background: 'white', border: 'solid #53B177'}}/> */}
    </>
  );
}
 
const MemoizedSinkNode = memo(SinkNode);
export default MemoizedSinkNode;