import {getRecipeFromMistral} from "./ai";
import React from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";


export default function Main(){
    let [ingredients, setIngredient] =React.useState([])
    const[recipeShown, setrecipeShown]=React.useState(false)
    const[recipe, setrecipe]=React.useState("")
    const recipeSection = React.useRef(null)

    function addIngredient(formData){
        const ingredient = formData.get("ingredient")
        setIngredient((previngredients)=>[...previngredients, ingredient])
        console.log(ingredient)
    }
  
    async function getrecipe(){
            const reciperMarkdown = await getRecipeFromMistral(ingredients);
            console.log(reciperMarkdown)
            setrecipe(reciperMarkdown)
            setrecipeShown(prevshown=>!prevshown)
        
    }
    React.useEffect(()=>{
        if(recipe!="" && recipeSection.current!=null){
           recipeSection.current.scrollIntoView({behavior:"smooth"}) 
        }

    },[recipe])  

    return(
        <main>
            
            <form action={addIngredient}  className="add-ingredient-form" >
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient" 
                    name="ingredient"
                    />
                <button type="submit" >+ Add Ingredient</button>
            </form>
        { ingredients.length>0 && <IngredientList 
                                        ingredients={ingredients}  
                                        getrecipe={getrecipe}
                                        ref={recipeSection}
                                        />}

       {recipeShown && <ClaudeRecipe recipe={recipe}/>}

        </main>
    )
}