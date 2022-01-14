//! Styles
import { useState } from "react"
import { Wrapper } from "../styles/Recipe.styles"

const Recipe = ({ title, calories, image, ingredients }) => {
  const [toggleRecipe, setToggleRecipe] = useState(false)

  return (
    <Wrapper>
      <abbr title="Toggle to show/hide this recipe.">
        <h1
          onClick={() => setToggleRecipe(prevToggle => !prevToggle)}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </abbr>
      <img src={image} alt={title} />
      <ol>
        {toggleRecipe ? (
          <>
            Recipe:
            {ingredients.map(({ text }) => (
              <li>{text}</li>
            ))}
          </>
        ) : null}
      </ol>
      <h3>Calories: {calories.toFixed()}</h3>
    </Wrapper>
  )
}

export { Recipe }
