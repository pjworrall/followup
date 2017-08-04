/**
 * Created by pjworrall on 01/08/2017.
 */

FlowRouter.route('/', {
    action: function() {
        console.log("route home");
        BlazeLayout.render("layout", {content: 'home'});
    },
        name: "home"
});


FlowRouter.route('/record/:_id', {
    action: function() {
        console.log("route record");
        BlazeLayout.render("layout", {content: 'record'});
    },
    name: "record"
});

FlowRouter.route('/upload', {
    action: function() {
        console.log("route upload");
        BlazeLayout.render("layout", {content: 'upload'});
    },
    name: "upload"
});

