import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';
import { type DatasetNode} from './types';
import { PiStackFill } from 'react-icons/pi';
import SourceHandle from './SourceHandle';
import TargetHandle from './TargetHandle';

export function DatasetNode({ data }: NodeProps<DatasetNode>): JSX.Element {
  return (
    <>
      <div style={{ padding: '8px 8px', lineHeight: 0.7, borderRadius: '24px', background: '#898EBD' }}>
        <PiStackFill style={{ color: 'white' }} />
      </div>

      <TargetHandle />
      <SourceHandle />
    </>
  );
}
 
const MemoizedDatasetNode = memo(DatasetNode);
export default MemoizedDatasetNode;