import React from 'react';
import store from '../store';
import DocText from './docText';
import { hashHistory } from 'react-router';

const DocReader = React.createClass({
  clickHandler: function(evt){
    store.newDoc.pending = true;
    hashHistory.push('confirmation');
  },
  render: function(){
    let inputState = false;
    if (store.newDoc.read === true){
      inputState = true;
    }
    return (
      <div className="doc-container">
        <DocText doc={store.newDoc}/>
        <input type="checkbox"
          onClick={this.clickHandler}
          checked={store.newDoc.pending}
          ref="mark"
          disabled={inputState}/>Mark as Read
        {this.props.children}
      </div>
    );
  }
});

export default DocReader;
