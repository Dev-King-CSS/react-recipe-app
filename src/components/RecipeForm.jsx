//! Styles
import { Form } from "../styles/RecipeForm.styles"

const RecipeForm = ({ getSearch, search, updateSearch }) => {
  return (
    <>
      <Form onSubmit={getSearch}>
        <input
          type="text"
          className="search"
          value={search}
          onChange={updateSearch}
          placeholder="Search for recipes"
        />
        <button type="submit">Find</button>
      </Form>
    </>
  )
}

export { RecipeForm }
