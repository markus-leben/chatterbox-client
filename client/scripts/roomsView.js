// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(roomNames) {
    // TODO: Render out the list of rooms.
    // empty out the select form
    RoomsView.$select.empty();
    // debugger;
    // for everything passed in from rooms.js
    for (let thisRoom of Object.keys(roomNames)) {
      // renderroom on those to add them to the select form
      $(RoomsView.renderRoomDropdown(thisRoom)).appendTo(RoomsView.$select);
      // RoomsView.renderRoomDropdown(room).appendto(RoomsView.$select)
    }
  },

  renderRoomDropdown: function(roomname) {
    // TODO: Render out a single room.
    return _.template(`<option value="<%-roomname%>"><%-roomname%></option>`)({'roomname': roomname});
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
