import { useState, useEffect } from "react"
//! Components
import { Recipe } from "./components/Recipe"
import { RecipeForm } from "./components/RecipeForm"
//! Secret keys
import secrets from "./secrets.json"
//! Styles
import { Wrapper, GlobalStyles } from "./App.styles"

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("Apple")

  const { APP_ID, APP_KEY } = secrets

  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    //prettier-ignore
    (async () => {
      try {
        const { hits } = await (await fetch(URL)).json()
        setRecipes(hits)
      } catch (e) {
        console.log(e.message)
        return <p>No recipe found!</p>
      }
    })()
  }, [URL])

  const updateSearch = ({ target }) => setSearch(target.value)

  const getSearch = e => {
    e.preventDefault()
    if (search.match(/^\s*$/)) return setSearch("")
    setQuery(search)
    setSearch("")
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <RecipeForm
          getSearch={getSearch}
          search={search}
          updateSearch={updateSearch}
        />
        <div className="Container">
          {recipes.map(
            // Ultra destructuring
            ({ recipe: { label, calories, image, ingredients } }) => (
              <Recipe
                key={label}
                title={label}
                calories={calories}
                image={image}
                ingredients={ingredients}
              />
            )
          )}
        </div>
      </Wrapper>
    </>
  )
}

export { App }
