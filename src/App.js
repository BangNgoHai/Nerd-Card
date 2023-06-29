import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/Navbar/NavBar';
import Slogan from './components/Slogan/Slogan';

function App() {
  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <NavBar/>
      <Slogan/>
      <Content/>
    </div>
  );
}

export default App;
