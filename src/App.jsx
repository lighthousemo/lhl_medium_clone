import React from 'react';
import data from './data';
import Title from './Title.jsx';
import Paragraph from './Paragraph.jsx';

const App = React.createClass({
  render: function() {
    console.log("render <App/>");
    if(!this.state) return false;
    return (
      <div className="article">
        <Title title={this.state.article.title}/>
        { this.state.paragraphs.map(function(paragraph) {
            return <Paragraph key={paragraph.id} content={paragraph.content} />
        })}
      </div>

    )

  },
  componentDidMount: function() {
    console.log("componentDidMount <App/>");
    this.setState(data); // calls render
  },
});

export default App;
