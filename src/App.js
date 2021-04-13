import React, {useState , useEffect} from 'react'
import "./App.css"
import Recipe from './components/recipe'


const App = () => {

  const App_id = "ee111e4c"
  const App_key ="6599db68907bd051c40cf2b533fb4932"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [load,setLoad] = useState(undefined)
  
  useEffect(() => {

    getRecipes()
    setLoad(false)
    
  }, [query])

  
  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json()
    console.log(data)
    setLoad(true)
    
    
    setRecipes(data.hits)
  }
  const updateInput = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    
    setQuery(search)
    e.preventDefault()
    
    
  }
  return (
    <div className="App">
      <h1 className="heading">KANIKA's KITCHEN!!!</h1>
      <h4>Cook it bitch!!!</h4>
      <form onSubmit ={getSearch } className ="search-form">
        <input className ="search-input"type="text" onChange ={updateInput} />
        <button  className ="search-button"type ="submit">search</button>
      </form>
      <div className ="getting-recipe">
        {recipes.map(recipe => (
          <Recipe ingredients = {recipe.recipe.ingredients} load={load} setLoad={setLoad}image={recipe.recipe.image} title={recipe.recipe.label} calorie={ recipe.recipe.calories}/>
        ))}
      </div>
    </div>
  )
}

export default App;