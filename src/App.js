import {useState,useEffect} from 'react';
import axios from "axios";
import './App.css';
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";



const App=()=> {
  const [items, setItems] = useState([]);
  // to know if data is still being fetched or not - initially it is loading
  const [isLoading, setIsLoading] = useState(true);
  // for search component
  const [query,setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      //console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    } 
    fetchItems();
    
  }, [query])


  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
