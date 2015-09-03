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
    console.log('SongQueue: enqueue');
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
      this.trigger('stop');
    }
  },

  playFirst: function() {
    console.log('SongQueue: playFirst(1)');
    this.at(0).play();
    console.log('SongQueue: playFirst(2)');
  }

});
