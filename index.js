const API_KEY = "65924dc36d1848978ffb61aa2e4ef29d";
const recipeListEl = document.getElementById("recipe-list");


function displayRecipes(recipes){
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";


        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        
        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeIngredientsEl = document.createElement("p");
         recipeIngredients.innerHTML =`<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
         `

      

        recipeItemEl.appendChild(recipeLinkEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeListEl.appendChild(recipeItemEl);


    })
}

async function getRecipes(){
   const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

   const data = await response.json();
   return data.recipes;
}



async function init(){
 const recipes = await getRecipes();
displayRecipes(recipes);
}
init();