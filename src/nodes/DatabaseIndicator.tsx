import { DatabaseIndicatorState, DatabaseProvider} from './types';
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

function ErrorBadge(): JSX.Element {
  return (
    <div style={{ position: 'absolute', top: '-2px', right: '-2px', background: '#CB6661', color: 'white', borderRadius: '50%', width: '14px', height: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ fontSize: '12px' }}>!</span>
    </div>
  );
}

export function DatabaseIndicator({ databaseProvider, databaseIndicatorState }: { databaseProvider: DatabaseProvider, databaseIndicatorState: DatabaseIndicatorState }): JSX.Element {
  const isDimmed = databaseIndicatorState === DatabaseIndicatorState.Dimmed;
  const hasError = databaseIndicatorState === DatabaseIndicatorState.Error;

  return (
    <div style={{ position: 'relative' }}>
      {hasError && ErrorBadge()}
      <div style={{ opacity: isDimmed ? 0.5 : 1, padding: '6px 6px', lineHeight: 0.7, borderRadius: '50%', border: '1px solid', borderColor: hasError ? '#cb6661' : '#e7e7e7', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 4px', background: hasError ? '#fdf1eb' : '#fff' }}>
        {DatabaseIcon(databaseProvider)}
      </div>
    </div>
  );
}