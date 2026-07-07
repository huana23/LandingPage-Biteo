import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import BiteoLayout from './components/layouts/BiteoLayout';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<BiteoLayout><Page /></BiteoLayout>} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
