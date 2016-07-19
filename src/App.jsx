import React from 'react';
import data from './data';
import Title from './Title.jsx';
import Paragraph from './Paragraph.jsx';

const App = React.createClass({
  // This function allows the child component <Paragraph /> to notify
  // the <App /> component that the paragraph was highlighted
  setHighlighted: function(paragraphID) {
    // Create a new state object that sets the value of highlightedID to 
    // the given paragraph ID. We are using Object.assign() with 3 parameters
    // because we want newState to be a new object (i.e. we don't want to modify
    // the old state object.)
    const newState = Object.assign({}, this.state, { highlightedID: paragraphID })
    // calling setState to update this.state.highlightedID
    this.setState(newState)
  },
  // Using this lifecycle method to set the initial state
  getInitialState: function() {
    // We are splitting up the state into ui state and data.
    // ui state is state that is not saved on the server
    const uiState = {highlightedID: 1};
    return Object.assign({}, uiState, data); // initialState
  },
  render: function() {
    console.log("render <App/>");
    if(!this.state) return false;
    return (
      <div className="article">
        <Title title={this.state.article.title}/>
        { /* This is a sample comment in JSX. */ }
        { this.state.paragraphs.map(function(paragraph) {
            // first try: determine if the paragraph is highlighted
            // if(paragraph.id === this.state.highlightedID) {
            //   const highlighted = true;
            // } else {
            //   const highlighted = false;
            // }
            // second try: determine if the paragraph is highlighted
            // const highlighted = (paragraph.id === this.state.highlightedID) ? true : false;
            const highlighted = paragraph.id === this.state.highlightedID;
            return <Paragraph key={paragraph.id} paragraph={paragraph} highlighted={highlighted} setHighlighted={this.setHighlighted} />
        }.bind(this))}
        {/* we have to add bind(this) to be able to access this.state in the map callback function */}
      </div>
    )

  },
  componentDidMount: function() {
    // called when the component is attached to the DOM
    console.log("componentDidMount <App/>");
  },
});

export default App;
