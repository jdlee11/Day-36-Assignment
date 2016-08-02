import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

const DocModal = React.createClass({
  confirmFunction: function(){
    store.newDoc.read = true;
    hashHistory.push('/');
  },
  cancelFunction: function(){
    store.newDoc.pending = false;
    hashHistory.push('/');
  },
  render: function(){
    return (
      <div className="modal-container">
        <div className="modal">
          <p>Are you sure you read this?</p>
          <button onClick={this.confirmFunction}>Yes</button>
          <button onClick={this.cancelFunction}>No</button>
        </div>
      </div>
    );
  }
});

export default DocModal;
