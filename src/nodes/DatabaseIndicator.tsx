import { DatabaseProvider} from './types';
import { BsHddNetwork } from 'react-icons/bs';
import { FaGoogleDrive } from 'react-icons/fa';
import { SiAmazonredshift } from 'react-icons/si';

export function DatabaseIcon(type: DatabaseProvider): JSX.Element {
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

export function DatabaseIndicator({ databaseProvider }: { databaseProvider: DatabaseProvider }): JSX.Element {
  return (
    <div style={{ padding: '6px 6px', lineHeight: 0.7, borderRadius: '24px', border: '1px solid #e7e7e7', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px' }}>
      {DatabaseIcon(databaseProvider)}
    </div>
  );
}