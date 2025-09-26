export default function IngredientList(props){
        const ingredientList =props.ingredients.map(ingredient=>(
        <li key={ingredient} >{ingredient}</li>
    ))
    return(
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredient-list" aria-live="polite">{ingredientList}</ul>
            {ingredientList.length>3 &&
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <div>
                        <button onClick={props.getrecipe}>Get a recipe </button>
                    </div>
            </div>
                }

        </section>
    )

}