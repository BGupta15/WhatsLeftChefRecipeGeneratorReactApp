export default function IngredientsList(props){
    const ingredientList = props.ingredients.map(ing=>{
        return <li key={ing}>{ing}</li>
    })
    return(
        <section className="Container">
                    <div className="List">
                        <div>
                        <h2>Ingredients on hand: </h2>
                        </div>
                        <div>
                            <ul>
                                {ingredientList}
                            </ul>
                        </div>
                    </div>
                    {ingredientList.length>3 && <div className="readyContainer">
                            <div>
                                <h3>Ready for a Recipe?</h3>
                                <p>Generate a recipe for your list of ingredients</p>
                            </div>
                            <div className="recipeButton"><button type="button" onClick={props.getRecipe}>Get a recipe</button></div>
                    </div>}
                </section>
    )    
}