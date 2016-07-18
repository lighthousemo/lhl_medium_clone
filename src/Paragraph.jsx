import React from 'react';

const Paragraph = React.createClass({
  render: function() {
    return <p>{this.props.content} </p>;
  }
});

export default Paragraph;


