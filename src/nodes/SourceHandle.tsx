import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

export function SourceHandle(): JSX.Element {
  return <Handle type="source" position={Position.Right} style={{ background: 'white', border: '2px solid #53B177'}} />
}

const MemoizedSourceHandle = memo(SourceHandle);
export default MemoizedSourceHandle;