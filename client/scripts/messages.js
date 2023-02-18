// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  // messages._data should be an array of time sorted messages, each message contains
  _data: [],
  // hasRunBefore: false,

  // update method, may need to change if continually changes
  update: function (rawData) {
    // clear it out
    Messages._data = [];
    // pushall
    Messages.pushAll(rawData);
    // send the data to view
    MessagesView.render(Messages._data);

  },

  otherFunction: function () {
    // get th
    // loop through raw data
      // check if it's newer than the newest thing in messages._data
        // if it is, addToFront it
    // render
  },
  addAllNewToFront: function () {
    // fill later if we need it
  },
  addToFront: function () {
    // fill later if we need it
  },

  // method to push a bunch of stuff
  pushAll: function (rawData) {
  // inputs: the raw data from parse.js
  // outputs: add the relevant values of each of those things to messages._data
  // go through rawdata
    for (let rawMessage of rawData) {
      // use messages push on each of them
      Messages._data.push(Messages.trimMessage(rawMessage));
    }
  },

  // method to push an individual thing
  trimMessage: function (message) {
    var trimmedMessage = {
      text: message.text,
      username: message.username
    };
    return trimmedMessage;
  }



  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // should this initialize, or have some sort of special case that it does when data starts as null?
  // either way it has some sort of add message function, and then it call something in messagesView.js
  // for MVP that should probably just be initialize, then make it not reload everything once we've got init working

};