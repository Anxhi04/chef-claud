
import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe({recipe}){
    return(
        <section className="recipe">
            <h1>Chef Claude Recommends: </h1>
            <ReactMarkdown >{recipe}</ReactMarkdown >
        </section>
        
    )
}