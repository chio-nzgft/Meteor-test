if (Meteor.isClient){
	// uodate session variable very 1000 ms
	Meteor.setInterval(function(){
		Session.set("current_date", new Date());
	}, 1000);
	// display session var
	Template.date_display.helpers({
		current_date:function(){
			return Session.get("current_date");
		}
	});
}

if (Meteor.isServer){
	Meteor.startup(function(){
		// code to run on server at startup
	});
}
