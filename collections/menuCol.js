Meteor.methods({
	suggestRecipes: function(){
		var recipes = Recipes.find({});
		var ingredientsHome = IngredientsHome.find({});

		ingredientsHome.forEach(function(ingredientHome){
			console.log(ingredientHome.name);
		});
		recipes.forEach(function(recipe){
			recipe.ingredients.forEach(function(ingredient){
				console.log(ingredient.name);
			})
		});
	}
});