// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
// (Make sure to go over questions written in the notebook)
// Does the solution lecture video draw the visualization correctly, or is there a better way to draw it?
  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song){
    if( this.at(0) === song ){
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playNext: function(song) {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop'); // why is this not (this.trigger('stop', this))?
    }
  },

  playFirst: function() {
    this.at(0).play(); // seems to mimic LibraryEntryView code, but SongQueue is a collection (of a model) and not a view, so why is this not an event emitter instead, like in AppModel.js, eg. this.set('currentSong', song);???
  }

});
