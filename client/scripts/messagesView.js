// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // render
  },

  render: function(messages) { // [{k:v, ...}, {...}]
    // TODO: Render _all_ the messages.

    // Gotta clear everything out
    MessagesView.$chats.empty();

    // for everything in the info passed from messages.js
    for (let thisMessage of messages) {
      // renderMessage with each of those
      MessagesView.renderMessage(thisMessage);
    }
  },

  renderMessage: function(message) {
    // TODO: call messageview, then put that into
    // TODO: Render a single message. create a div containing the message and whatever else will be rendered
    // append message divs to the <div id="chats"></div>
    // MessageView.render({username: 'Nilly', messageText:'This is a message.'})
    $(MessageView.render({username: message.username, text: message.text})).appendTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};