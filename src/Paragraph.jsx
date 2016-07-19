import React from 'react';

const Paragraph = React.createClass({
  // Called when the user clicks on the paragarph.
  // See onClick binding in render function.
  // event - DOM event object, similar to the event object in jQuery's click callback function
  // event.nativeEvent - the full event object if you ever need it
  handleClick: function(event) {
    this.props.setHighlighted(this.props.paragraph.id);
  },
  render: function() {
    // Set the classes to be a string that contains the class for the <p>
    // tag. We want the class to be "highlighted" if the paragraph is highlighted.
    const classes = this.props.highlighted ? "highlighted" : "";
    return <p
             className={classes}
             onClick={this.handleClick}
             >{this.props.paragraph.content}</p>;
  }
});

export default Paragraph;


