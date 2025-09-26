
import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe({recipe}){
    return(
        <section className="recipe">
            <ReactMarkdown >{recipe}</ReactMarkdown >
        </section>
        
    )
}