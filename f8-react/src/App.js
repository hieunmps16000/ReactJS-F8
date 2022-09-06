import './App.css'
import { publicRoutes } from './Routes';
import { DefaultLayout } from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          { publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={< Page />} />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
