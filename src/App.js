import React from 'react';
import logo from './logo.svg';
import './App.css';



marked.setOptions({
  breaks : true
  });


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: initialText,
      resizeMarkdown : false,
      resizePreview : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);
    this.resizeMarkdown = this.resizeMarkdown.bind(this);
    this.resizePreview = this.resizePreview.bind(this);
  }
  
  handleChange(event) {
    let content = document.getElementById("editor");
    this.setState({
      editText: content.value
    });
  }
  
  clearMarkdown(){
    this.setState({
      editText : ''
    });
  }
  
  resizeMarkdown(){
    this.setState({
      resizeMarkdown : !this.state.resizeMarkdown
    });
  }
  
  resizePreview(){
    this.setState({
      resizePreview: !this.state.resizePreview
    });
  }
  
  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="windows">
          <MarkdownWindow
            clearMarkdown = {this.clearMarkdown}
            resizeMarkdown = {this.resizeMarkdown}
            state = {this.state}
            handleChange = {this.handleChange}
            markdown = {this.state.editText}
          />
          <PreviewWindow 
            preview = {this.state.editText} 
            resizePreview = {this.resizePreview}
            state = {this.state}
            />
        </div>
      </div>
    );
  }
}

const Header = function() {
  return (
    <div id = "header">
      <h1>MARKDOWN to HTML</h1>
    </div>
  );
};

class MarkdownWindow extends React.Component {
  render() {
    let rescale;
    if (this.props.state.resizeMarkdown === true){
      rescale = {
       flex:`1 0 100%`
      }
    }
     else if (this.props.state.resizePreview === true){
      rescale = {
        display:'none'
      }
     }
    return (
      <div style = {rescale} className = "markdown-window">
        <EnlargeBar 
          clearButton = {true} 
          clear = {this.props.clearMarkdown} 
          resize = {this.props.resizeMarkdown}
          />
        <textarea
          id = "editor"
          onChange = {this.props.handleChange}
          value = {this.props.markdown}
        />
      </div>
    );
  }
}

class PreviewWindow extends React.Component {
  render() {
    let rescale;
    if (this.props.state.resizePreview === true){
      rescale = {
      flex : `1 0 100%`, 
      marginLeft: `0px`      
      };
    }
    else if (this.props.state.resizeMarkdown === true ){
      rescale = {
        display:'none'
      }
      }
    return (
      <div style = {rescale} id = "preview-window">
        <EnlargeBar 
          addTitle="Result" 
          resize = {this.props.resizePreview}
          />
        <div id = "preview" dangerouslySetInnerHTML = {{ __html: marked(this.props.preview) }} />
      </div>
    );
  }
}

class EnlargeBar extends React.Component {
  render() {
    return (
      <div className = "enlarge-bar">
        <div className = "window-title">
          {this.props.clearButton && <div className="clear" onClick = {this.props.clear}>Clear</div>}
          {this.props.addTitle}</div>
        <i className="fa fa-arrows-alt" onClick={this.props.resize}/>
      </div>
    );
  }
}

const initialText = `
Markdown Demonstratoin
======================

This demonstrates a sample of a markdown conversion with the help of [Markdown.js](https://marked.js.org/#/README.md#README.md)

Usage of Markdown
-----------------

*   Blogs
*   Porfolios
*   Good combination with CMS

**Example of a code block with Markdown**  
\`\`\`
p { color: red; } 
body { background-color: #eee; }
\`\`\`

**Example of a inline code block with Markdown ** 
\`<div> </div>\`

> Blockquotes are very handy in email to emulate reply text.

This project has been powered by


![alt text](https://laracasts.com/images/series/circles/do-you-react.png "react")

`


export default App;
