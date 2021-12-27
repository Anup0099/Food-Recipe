import React,{useEffect,useState} from 'react'
import './App.css';
import Reciepe from './Reciepe';

function App() {
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');
  const App_ID ='f7661002'
  const App_key="83d2e55812eb23b04928be698e0738f2";
  const App_url=`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_key}`;
useEffect(()=>{
  getReciepies();
},[query]);

const getReciepies = async () => {
  const response = await fetch(App_url);
  const data = await response.json();
  setRecipes(data.hits);
console.log(data.hits);
 
}
const updateSearch = e => {
  setSearch(e.target.value);
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
     
        <input className="search-bar" type="text" placeholder="Search for a food" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
       </form>
       <div className="recipes">

       {recipes.map(recipe =>(
         <Reciepe
         key={recipe.recipe.label}
         title={recipe.recipe.label} calories={recipe.recipe.calories}
         image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
         
         />
       ))}
       </div>
    </div>
  );
}

export default App;
