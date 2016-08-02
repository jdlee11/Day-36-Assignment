import React from 'react';

const DocText = React.createClass({
  render: function(){
    return (
      <div className="doc-text">
        <p>{this.props.doc.text}</p>
      </div>
    );
  }
});

export default DocText;
