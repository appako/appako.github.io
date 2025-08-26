import { createRoot } from 'react-dom/client';
import { Resume } from './resume';
import './styles.css';

const root = createRoot(document.getElementById('root')!);
root.render(<Resume />);
