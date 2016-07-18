import React from 'react';

const Title = React.createClass({
  render: function() {
    return (
      <h1 className="title" id="blah">{this.props.title}</h1>
    )
  }
});

export default Title;


