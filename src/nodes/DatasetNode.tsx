import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';
import { type DatasetNode} from './types';
import { PiStackFill } from 'react-icons/pi';
import SourceHandle from './SourceHandle';
import TargetHandle from './TargetHandle';

export function DatasetNode({ data }: NodeProps<DatasetNode>): JSX.Element {
  return (
    <div style={{ height: '34px', width: '34px'}}>
      <div style={{ padding: '8px 8px', lineHeight: 0.7, borderRadius: '50%', background: '#898EBD', width: '16px' }}>
        <PiStackFill style={{ color: 'white' }} />
      </div>
      <div style={{color: '#323333', fontSize: '12px', border: '1px solid lightgrey', borderRadius: "4px", padding: '0px 8px', marginTop: '6px', position: 'absolute', top: '33px', left: '-29px'}}>
        {data.label}
      </div>
      <div style={{color: 'grey', fontSize: '12px', marginTop: '1px', position: 'absolute', top: '60px', left: '-24px', minWidth: '100px'}}>
        {data.sublabel}
      </div>
      <SourceHandle />
      <TargetHandle />
      </div>
  );
}
 
const MemoizedDatasetNode = memo(DatasetNode);
export default MemoizedDatasetNode;