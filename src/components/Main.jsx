import React from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import getRecipeFromMistral from "./ai.js"

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipeMarkdown)
        setRecipe(recipeMarkdown)
    }

    function addIngr(formData){
        setIngredients((prev)=>[...prev, formData.get("ingredient")])
    }

    return(
        <main> 
            <form action={addIngr} className="addingIngredients">
                <div className="inputDiv">
                    <input name="ingredient" type="text" aria-label="Add ingredient" placeholder="e.g. oregano"></input>
                    <button>Add Ingredient</button>
                </div>
                {ingredients.length>0 && <IngredientsList getRecipe={getRecipe} ingredients={ingredients}/>}
                <div className="recipe">
                {recipe && <Recipe recipe={recipe}/>}
                </div>
            </form>
        </main>
    )
}