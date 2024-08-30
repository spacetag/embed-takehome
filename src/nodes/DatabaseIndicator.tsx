import { DatabaseIndicatorState, DatabaseProvider} from './types';
import { BsHddNetwork } from 'react-icons/bs';

export function DatabaseIcon(type: DatabaseProvider): JSX.Element {
  // Render different icon based on the type of sink node
  switch (type) {
    case DatabaseProvider.Fileshare:
      return <BsHddNetwork color="grey" />;
    case DatabaseProvider.GoogleDrive:
      // https://iconduck.com/sets/stack-icons
      return <svg height="12" viewBox="0 0 256 222" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0" stop-color="#f6c338"/><stop offset=".522782398" stop-color="#ffd351"/><stop offset="1" stop-color="#f6c338"/></linearGradient><linearGradient id="b" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0" stop-color="#286ee6"/><stop offset=".521046125" stop-color="#4286fb"/><stop offset="1" stop-color="#286ee6"/></linearGradient><linearGradient id="c" x1="65.289307%" x2="35.995483%" y1="0%" y2="100%"><stop offset="0" stop-color="#069b5a"/><stop offset=".531031222" stop-color="#11aa62"/><stop offset="1" stop-color="#069b5a"/></linearGradient><path d="m83.3 0h89l83.7 144.3h-89.2z" fill="url(#a)"/><path d="m256 144.3-44.6 77.1h-167l44.7-77.1z" fill="url(#b)"/><path d="m44.4 221.4-44.4-77.1 83.3-144.3 44.7 77.3z" fill="url(#c)"/><path d="m44.4 221.4 83.1-77.1h-38.4z" opacity=".1"/><path d="m256 144.3h-89.1l-19.6-33.8z" opacity=".1"/><path d="m83.3 0 25.7 110 19-32.7z" opacity=".1"/></svg>
    case DatabaseProvider.RDS:
      // https://iconduck.com/sets/aws-simple-icons-for-architecture-diagrams
      return <svg height="16" viewBox="10 10 80 80" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m78.47 23.02 5.7 2.75v48.31l-5.7 2.76-9.02-26.84z" fill="#5294cf"/><path d="m21.53 23.02-5.69 2.75v48.31l5.69 2.76 14.24-26.84z" fill="#205b99"/><path d="m50 69.89 28.47 6.93v-53.8l-28.47 6.93z" fill="#205b99"/><path d="m50 69.89-28.47 6.93v-53.8l28.47 6.93z" fill="#5294cf"/><path d="m56.83 87.58 10.89-5.43v-64.3l-10.89-5.43-10.81 35.74z" fill="#5294cf"/><path d="m43.17 87.58-10.88-5.43v-64.3l10.88-5.43 9.68 37.58z" fill="#205b99"/><path d="m43.17 12.42h13.67v75.16h-13.67z" fill="#2e73b8"/></svg>
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