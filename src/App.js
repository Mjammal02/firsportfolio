import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HOME from './components/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HOME/>}/>
      </Route>
    </Routes>
  );
}

export default App;
