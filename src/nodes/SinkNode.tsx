import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';
import { type SinkNode} from './types';
import { DatabaseIndicator } from './DatabaseIndicator';
import TargetHandle from './TargetHandle';

export function SinkNode({ data }: NodeProps<SinkNode>): JSX.Element {
  return (
    <>
      <DatabaseIndicator databaseProvider={data.databaseProvider} />
      <TargetHandle />
    </>
  );
}
 
const MemoizedSinkNode = memo(SinkNode);
export default MemoizedSinkNode;