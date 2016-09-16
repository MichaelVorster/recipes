Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},

	deleteRecipe: function(id){
		Recipes.remove(id);
	},

	deleteIngredientHome: function(id){
		IngredientsHome.remove(id);
	},

	updateMissingIngredients: function(update){
		var missing;
		var recipesCursor;
		var ingredientsHomeCursor;
		var ingredientId;
		var missingIngredientsList;
		
		if (update === 'in menu') {recipesCursor = Recipes.find({inMenu: true});}
		else if (update === 'suggested') {
			recipesCursor = Recipes.find({inMenu: false});
		}
		else {recipesCursor = Recipes.find({});}
		
		ingredientsHomeCursor = IngredientsHome.find({});

		recipesCursor.forEach(function(recipe){
			missingIngredientsList = []
			recipe.ingredients.forEach(function(ingredient){
				missing = true;
				ingredientsHomeCursor.forEach(function(ingredientHome){
					if (ingredientHome.name === ingredient.name){
						missing = false;
					}
				});
				if (missing){
					missingIngredientsList.push({
						name: ingredient.name,
						amount: ingredient.amount
					})
				}
			});
			Recipes.update(recipe._id, {
				$set: {
					missingIngredients: missingIngredientsList,
					numMissingIngredients: missingIngredientsList.length
				}
			});
		});
	}
});
