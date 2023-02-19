// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.timeRefresh();

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.

    // define a function that can call a setTimeout of itself?
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      console.log(data);
      // examine the response from the server request:
      // rooms.somefunction(data)
      Rooms.update(data);
      // messages.somefunction(data)
      Messages.update(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
    callback();
  },

  timeRefresh: function() {
    setTimeout(function () {
      App.fetch(App.timeRefresh);
    }, 30000);
  },

  // function () {
  //   fetch()
  // }
  // App.fetch.apply(null, [App.timeRefresh]), 10000);

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
