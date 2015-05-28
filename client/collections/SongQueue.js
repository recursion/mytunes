// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', this.enqueue, this)
        .on('dequeue', this.dequeue, this)
        .on('ended', this.ended, this);
  },

  enqueue: function(){
    if (this.models.length === 1){ this.playFirst(); }
    console.log('Song added!');
  },

  dequeue: function(song){
    if (song){
      this.remove(song);
      console.log('Song removed!');
    } else {
      this.shift();
      console.log('Song removed!');
    }
  },

  ended: function(song){
    this.dequeue(song);
    if (this.models.length){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  }

});
