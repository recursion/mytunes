// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('<span class="artist"><%= artist %></span> &ndash; <%= title %>'),

  events: {
    'click': function() {
      // this.model.play();
      // I think this should actually dequeue -mike
      // this.model.ended();
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
