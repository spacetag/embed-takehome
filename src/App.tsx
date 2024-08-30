import { IoHomeOutline } from "react-icons/io5";
import PipelineGraph from "./PipelineGraph";

export default function App() {
  return (
    <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
      <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '24px', padding: '16px', background: '#3C3F4A' }}>
        <IoHomeOutline style={{ color: 'white', marginRight: '10px' }} />
        <div>Pipeline</div>
      </div>
      <PipelineGraph />
    </div>
  );
}
