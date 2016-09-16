IngredientsHome = new Mongo.Collection('ingredientsHome');


IngredientsHome.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update:  function(userId, doc){
		return !!userId;
	}
})


IngredientsHomeSchema = new SimpleSchema({
	name: {
		type: String,
		label: 'Ingredient',
  		autoValue: function () {
    		if (this.isSet && typeof this.value === 'string'){
      			return this.value.toLowerCase();
      		}
      	}
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


