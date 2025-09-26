import {getRecipeFromMistral} from "./ai";
import React from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";


export default function Main(){
    let [ingredients, setIngredient] =React.useState(["patato", "oregano", "oil", "chicken"])
    const[recipeShown, setrecipeShown]=React.useState(false)
    const[recipe, setrecipe]=React.useState("")

    function addIngredient(formData){
        const ingredient = formData.get("ingredient")
        setIngredient((previngredients)=>[...previngredients, ingredient])
        console.log(ingredient)
    }
  
    async function getrecipe(){
            console.log("button clicked")
            const reciperMarkdown = await getRecipeFromMistral(ingredients);
            console.log(reciperMarkdown)
            setrecipe(reciperMarkdown)
            setrecipeShown(prevshown=>!prevshown)
        
    }
    return(
        <main>
            
            <form action={addIngredient}  className="add-ingredient-form" >
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
                <button type="submit" >+ Add Ingredient</button>
            </form>
        { ingredients.length>0 && <IngredientList ingredients={ingredients}  getrecipe={getrecipe}/>}

       {recipeShown && <ClaudeRecipe recipe={recipe}/>}

        </main>
    )
}