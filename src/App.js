import './App.css';
import Search from './components/Search';
import {useState} from 'react';
import Data from './components/Data';
function App() {
  const [search,setSearch] = useState("");
  return (
    <div className="my-4">
     <h3 className="my-4 container" style={{fontWeight: 'bold', textAlign: 'center'}}>
      Explore the World of Cryptocurrencies
     </h3>
     <Search setSearch={setSearch}/>
     <Data search={search}/>
    </div>
  );
}

export default App;
