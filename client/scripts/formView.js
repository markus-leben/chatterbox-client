// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    var messageBox = $('#message')[0];
    var message = {
      username: App.username,
      text: messageBox.value,
      roomname: 'lobby' // TODO: fix this to dynamically change room
    };
    if (messageBox.value.length > 0) {
      Parse.create(message);
      messageBox.value = '';
    }



    // if the message text is empty
      // do that preventdefault thing
    // otherwise
      // send the message, and probably update the DOM eventually, but let's just get the message going for now.
    console.log(typeof $('#message')[0].value);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};