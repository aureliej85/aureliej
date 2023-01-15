import './App.scss';
import Header from './Components/Header';
import { AllRoutes } from './AllRoutes';
import Footer from './Components/Footer';
import { ThemeProvider} from '@mui/material/styles';
import Theme from './Styles/Theme';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Header />
        <AllRoutes />
        <Footer />
      </ThemeProvider>
  
     
    </div>
  );
}

export default App;
