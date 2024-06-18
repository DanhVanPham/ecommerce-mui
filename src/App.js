import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Router from './routes';
import NotistackProvider from './components/NotistackProvider';
import ThemeProvider from './theme';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NotistackProvider>
          <CssBaseline />
          <Router />
        </NotistackProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
