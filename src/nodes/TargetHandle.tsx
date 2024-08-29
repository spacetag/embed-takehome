import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

export function TargetHandle(): JSX.Element {
  return <Handle type="target" position={Position.Left} style={{ borderColor: '#0000', background: '#0000' }} />
}

const MemoizedSourceHandle = memo(TargetHandle);
export default MemoizedSourceHandle;