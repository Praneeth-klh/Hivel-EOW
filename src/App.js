import './App.css';
import Card from './components/UserCard';
import Search from './components/Search';
import FullView from './components/FullView';


function App() {
  return (
    <div>
      <Search />
      <Card name="Praneeth" />
      <FullView/>
    </div>
  );
}

export default App;
