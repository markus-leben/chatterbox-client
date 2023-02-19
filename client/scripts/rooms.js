// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  // _data: null,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  _data: {},
  // hasRunBefore: false,
  currentRoom: 'lobby',


  // update the rooms,same as messages
  update: function (rawData) {
    // clear it
    Rooms._data = {};
    // update it with another function
    Rooms.pushAll(rawData);
    // send the data to roomsViewer
    RoomsView.render(Rooms._data);
  },

  pushAll: function(rawData) {
    // loop em
    for (let rawMessage of rawData) {
      // check if it's a new room
      if (!(rawMessage.roomname in Rooms._data)) {
        // make an empty room
        Rooms._data[rawMessage.roomname] = [];
      }
    }
  }


  /*{
    'lobby':[
      {'user':'kyle, 'message':'yo guys wana buy a used copy of nintendogs?'},
    ],
    'hackerzone': [
      {'user':'mo', 'message':'pretend I put a fancy attack here'}
    ]
  }*/


};