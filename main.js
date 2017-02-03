if (Meteor.isClient){
        Template.date_display.helpers({
                current_date:function(){
                        return new Date();
                }
        });
}

if (Meteor.isServer){
        Meteor.startup(function(){
                // code to run on server at startup
        });
}
