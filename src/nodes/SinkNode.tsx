import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { type SinkNode, DatabaseProvider} from './types';
import { BsHddNetwork } from 'react-icons/bs';
import { FaGoogleDrive } from 'react-icons/fa';
import { SiAmazonredshift } from 'react-icons/si';

export function DatabaseIndicator(type: DatabaseProvider): JSX.Element {
  // Render different icon based on the type of sink node
  switch (type) {
    case DatabaseProvider.Fileshare:
      return <BsHddNetwork color="grey" />;
    case DatabaseProvider.GoogleDrive:
      return <FaGoogleDrive color="grey" />;
    case DatabaseProvider.RDS:
      return <SiAmazonredshift color="grey" />;
  }
}

export function SinkNode({ data }: NodeProps<SinkNode>): JSX.Element {
  return (
    <>
      <div style={{ padding: '10px 10px', lineHeight: '0.7px', borderRadius: '24px', border: '1px solid #e7e7e7', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px' }}>
        {DatabaseIndicator(data.databaseProvider)}
      </div>
 
      <Handle type="target" position={Position.Left} style = {{borderColor: '#0000', background: '#0000'}}/>
      {/* <Handle type="source" position={Position.Right} style = {{background: 'white', border: 'solid #53B177'}}/> */}
    </>
  );
}
 
const MemoizedSinkNode = memo(SinkNode);
export default MemoizedSinkNode;