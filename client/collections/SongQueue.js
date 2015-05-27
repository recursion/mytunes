// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this)
        .on('dequeue', this.dequeue, this)
        .on('ended', this.ended, this);
  },

  enqueue: function(){
    if (this.models.length === 1){ this.playFirst(); }
  },

  dequeue: function(){
    this.shift();
  },

  ended: function(){
    this.dequeue();
    if (this.models.length){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
    console.log('IM PLAYING THE FIRST THING');
  }

});
