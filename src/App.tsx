import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/system';
import SkillMaster from './components/SkillMaster';

export default function App() {
  document.body.style.backgroundColor = 'black';

  // const theme = createTheme({ palette: { primary: { main: '#ff4400' } } });

  return (
    // <ThemeProvider theme={theme}>
    <SkillMaster />
    // </ThemeProvider>
  );
}
