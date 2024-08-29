import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type SinkNode} from './types';
import { DatabaseIndicator } from './DatabaseIndicator';

export function SinkNode({ data }: NodeProps<SinkNode>): JSX.Element {
  return (
    <>
      <DatabaseIndicator databaseProvider={data.databaseProvider} />
      <Handle type="target" position={Position.Left} style={{ borderColor: '#0000', background: '#0000' }} />
      {/* <Handle type="source" position={Position.Right} style={{ background: 'white', border: 'solid #53B177' }} /> */}
    </>
  );
}
 
const MemoizedSinkNode = memo(SinkNode);
export default MemoizedSinkNode;