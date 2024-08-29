import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';
import { OperationType, type OperationNode} from './types';
import TargetHandle from './TargetHandle';
import { FaDoorOpen } from 'react-icons/fa';
import SourceHandle from './SourceHandle';
import { LuAppWindow } from 'react-icons/lu';
import { MdOutlinePivotTableChart } from 'react-icons/md';

export function OperationIcon(type: OperationType): JSX.Element {
  // Render different icon based on the type of sink node
  switch (type) {
    case OperationType.Join:
      return <FaDoorOpen color="white" />;
    case OperationType.Append:
      return <LuAppWindow color="white" />;
    case OperationType.Pivot:
      return <MdOutlinePivotTableChart color="white" />;
  }
}

export function OperationNode({ data }: NodeProps<OperationNode>): JSX.Element {
  return (
    <>
      <div style={{ fontSize: '12px', background: '#2DBBA0', color: 'white', display: 'flex', alignItems: 'center', padding: '2px 16px', borderRadius: '20px'}}>
        {OperationIcon(data.operationType)}
        <div style={{paddingLeft: '4px'}}>{data.operationType}</div>
      </div>
      <SourceHandle />
      <TargetHandle />
    </>
  );
}
 
const MemoizedOperationNode = memo(OperationNode);
export default MemoizedOperationNode;