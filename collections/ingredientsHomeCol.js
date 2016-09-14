IngredientsHome = new Mongo.Collection('ingredientsHome');


IngredientsHomeSchema = new SimpleSchema({
	name: {
		type: String,
		label: 'Ingredient'
	},
	amount: {
		type: String
	},
	author: {
		type: String,
		label: 'Author',
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: 'hidden'
		}
	}
});

IngredientsHome.attachSchema(IngredientsHomeSchema);


Meteor.methods({
	deleteIngredientHome: function(id){
		IngredientsHome.remove(id);
	}
});


IngredientsHome.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update:  function(userId, doc){
		return !!userId;
	}
})