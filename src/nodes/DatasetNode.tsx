import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type DatasetNode} from './types';
import { PiStackFill } from 'react-icons/pi';

export function DatasetNode({ data }: NodeProps<DatasetNode>): JSX.Element {
  return (
    <>
      <div style={{ padding: '8px 8px', lineHeight: 0.7, borderRadius: '24px',  background: '#898EBD' }}>
        <PiStackFill style={{ color: 'white' }} />
      </div>

      <Handle type="target" position={Position.Left} style={{ borderColor: '#0000', background: '#0000' }} />
      <Handle type="source" position={Position.Right} style={{ background: 'white', border: '2px solid #53B177'}} />
    </>
  );
}
 
const MemoizedDatasetNode = memo(DatasetNode);
export default MemoizedDatasetNode;