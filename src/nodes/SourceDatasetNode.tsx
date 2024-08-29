import { memo } from 'react';
import { type NodeProps } from '@xyflow/react';
import { type SourceDatasetNode} from './types';
import { PiStackFill } from 'react-icons/pi';
import SourceHandle from './SourceHandle';
import TargetHandle from './TargetHandle';
import { DatabaseIndicator } from './DatabaseIndicator';

export function SourceDatasetNode({ data }: NodeProps<SourceDatasetNode>): JSX.Element {
  return (
    <div style={{ height: '34px', width: '34px'}}>
      <div style={{color: '#323333', fontSize: '12px', padding: '0px 8px', marginTop: '6px', position: 'absolute', top: '-3px', left: '-54px'}}>
        <DatabaseIndicator databaseProvider={data.databaseProvider} />
      </div>
      <div style={{ padding: '8px 8px', lineHeight: 0.7, border: '1px solid #BBBBBB', borderRadius: '8px', background: 'white', width: '16px' }}>
        <PiStackFill style={{ color: '#30BBF7' }} />
      </div>
      <div style={{color: '#323333', fontSize: '12px', border: '1px solid lightgrey', borderRadius: "4px", padding: '0px 8px', marginTop: '6px', position: 'absolute', top: '38px', left: '-29px'}}>
        {data.label}
      </div>
      <div style={{color: 'grey', fontSize: '12px', marginTop: '1px', position: 'absolute', top: '65px', left: '-28px', minWidth: '100px'}}>
        {data.sublabel}
      </div>
      <TargetHandle />
      <SourceHandle />
    </div>
  );
}
 
const MemoizedDatasetNode = memo(SourceDatasetNode);
export default MemoizedDatasetNode;