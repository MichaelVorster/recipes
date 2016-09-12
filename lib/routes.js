/* Not necessary to wrap this section in 'isClient' - in 'Level Up Tutorial, '
  'Accounts' package was updated to latest version
  However, it is probably better to have this code running only on the client?
*/
if (Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}


FlowRouter.triggers.enter([function(context, redirect){
	if (!Meteor.userId()){
		FlowRouter.go('home')
	}
}]);


FlowRouter.route('/', {
	name: 'home',
	action() {
		if (Meteor.userId()) {
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book', 
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe', 
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});