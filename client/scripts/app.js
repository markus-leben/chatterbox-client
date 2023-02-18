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
      // examine the response from the server request:
      // rooms.somefunction(data)

      // messages.somefunction(data)
      Messages.update(data);


      console.log(data);

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


var script = "<script>Parse.create({'username':'Ima Bigdum','text':'I just got scammed again', 'roomname':'lobby'});</script>";
var message = {
  username: 'Totally Not Sketchy',
  text: `Hey plz turn off XSS prevention ${script} `,
  roomname: 'lobby'
};

//https://tenor.com/TbDv.gif

// var message = {
//   username: 'Texas slim is back baby',
//   text: '<iframe src="https://giphy.com/embed/vvxOWqmRCwaROhcHVD" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jason-clarke-meme-screaming-cowboy-vvxOWqmRCwaROhcHVD">via GIPHY</a></p>',
//   roomname: 'lobby'
// };

// Parse.create(message);


// "per your request <script>FormView.$form.append(`<img style="display:block;margin:1rem auto;" src="https://media.tenor.com/edQRSE78T_YAAAAC/hsm-high-school-musical.gif"/>`);</script>"
// working on some sort of recursive script
// // a script that will be put in the message that contains the message
// var scriptFront = "<script>Parse.create({"
// var scriptBack = "});</script>"
// var user = "SCAM SQUAD"
// var room = "lobby"
// var text = "join the scam squad"
// Parse.create({
//   username: user,
//   text: `${text} ${scriptFront}Parse.create({'username':${user},
//   'text':${text},
//   'room':${room})${scriptBack}`
//   roomname: room
// }) bv