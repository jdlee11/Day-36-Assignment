import Backbone from 'backbone';

const Doc = Backbone.Model.extend({
  initialize: function(docTextContent){
    this.docTextContent = docTextContent;
  },
  idAttribute: '_id',
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/jlee-day-36',
  defaults: {
    read: false
  }
});

export default Doc;
