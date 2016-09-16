Recipes = new Mongo.Collection('recipes');


Recipes.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update:  function(userId, doc){
		return !!userId;
	}
});


Ingredient = new SimpleSchema({
	name: {
		type: String,
  		autoValue: function () {
    		if (this.isSet && typeof this.value === 'string'){
      			return this.value.toLowerCase();
      		}	
      	}
	},
	amount: {
		type: String
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: 'Name'
	},
	description: {
		type: String,
		label: 'Description'
	},
	ingredients: {
		type: [Ingredient]

	},
	preparation :{
		type: String
	},
	serves: {
		type: Number,
		optional: true
	},
	rating: {
		type: Number,
		defaultValue: 0,
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	missingIngredients: {
		type: [Ingredient],
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	numMissingIngredients: {
		type: Number,
		defaultValue: 0,
		autoform: {
			type: 'hidden'
		}
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: 'hidden'
		}
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
	},
	createdAt: {
		type: Date,
		label: 'Created At',
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: 'hidden'
		}
	}
});

Recipes.attachSchema(RecipeSchema);
