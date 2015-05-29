var MusicRouter = Backbone.Router.extend({
  /* define the route and function maps for this router */
  routes: {
    "" : "showAbout",
    "music": "showMusic"
  },

  showAbout: function(){
    $('body').html('<h3>We love music and so do you!</h3>\
      <br><a href="#about">About</a> <a href="#music">Music</a>\
      ');
  },

  showMusic: function(){
    $('body').html('');
    var library = new Songs(songData);
    var songQueue = new SongQueue(songData);
    var app = new AppModel({library: library, songQueue: songQueue});

    // build a view for the top level of the whole app
    var appView = new AppView({model: app});

    // put the view onto the screen
    $('body').append(appView.render());
  }
});
