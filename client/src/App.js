import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// components
import Header from './Components/Header/Header';
import Home from './Components/Home';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 55 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
