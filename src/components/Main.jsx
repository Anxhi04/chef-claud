import React from "react";

export default function Main(){
    let [ingredients, setIngredient] =React.useState([])
    const[recipeShown, setrecipeShown]=React.useState(false)
    const ingredientList =ingredients.map(ingredient=>(
        <li key={ingredient} >{ingredient}</li>
    ))
     
    function addIngredient(formData){
        const ingredient = formData.get("ingredient")
        setIngredient((previngredients)=>[...previngredients, ingredient])
        console.log(ingredient)
    }
    function togglerecipeshown(){
        setrecipeShown((oldrecipeval)=>!oldrecipeval)
    }
    return(
        <main>
            
            <form action={addIngredient} className="add-ingredient-form" >
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
                <button type="submit" >+ Add Ingredient</button>
            </form>
        { ingredientList.length>0 ? 
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredient-list" aria-live="polite">{ingredientList}</ul>
            {ingredientList.length>3 ? 
            <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <div>
                        <button onClick={togglerecipeshown}>Get a recipe </button>
                    </div>
            </div>: null
                }

        </section> : null}

       {recipeShown && 
        <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sed blanditiis? In saepe ipsa consectetur quos voluptas eos iure sapiente error, eum dolores blanditiis, beatae nam, libero fuga dolor! Saepe dolor doloribus doloremque rerum eaque placeat ab qui esse nobis suscipit obcaecati ipsa error unde blanditiis animi reprehenderit, alias accusantium nulla impedit debitis veritatis dicta. Tempora cupiditate quos consectetur qui unde repudiandae, aperiam reprehenderit. Cum itaque sit obcaecati dolore non architecto amet quia veritatis debitis maxime atque, ad earum ex at sint aperiam. Dolore, voluptas. Veniam excepturi eum voluptatem temporibus hic unde harum nisi sed, quas vero tenetur laboriosam esse.
        </div>}

        </main>
    )
}