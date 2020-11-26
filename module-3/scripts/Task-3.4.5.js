var recipe = {
    recipeTitle : 'Rice kheer',
    ingredients : ['rice', 'milk', 'sugar' ],
    servings : 4,
    directions : 'Boil the milk and add rice and sugar',
    letscook : function()  {
        console.log("I'm Hungry! Let's cook "+ recipe.recipeTitle);
    }
}

recipe.letscook();