import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AuthProvider } from './auth/AuthProvider';

const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(
		<AuthProvider>
			<App />
		</AuthProvider>
	);
}