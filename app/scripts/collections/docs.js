import Backbone from 'backbone';
import Doc from '../models/doc';

const Docs = Backbone.Collection.extend({
  model: Doc,
  url: 'http://tiny-za-server.herokuapp.com/collections/jlee-day-36'
});

export default Docs;
