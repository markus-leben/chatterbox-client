// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `)

  //Note to self: we removed comment lines from the html above.
  // This should be the format we use elsewhere  MessageView.render({username: 'Nilly', messageText:'This is a message.'})
  // note to self: if we managed to escaple succesfully before any injection attacks, get rid of the minus sign in <%-blah%> to become vulnerable to all sorts of nonsense

};