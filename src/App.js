import React from 'react';
import {Header} from './components/header';
import {MarkdownWindow} from './components/markdownWindow';
import {PreviewWindow} from './components/previewWindow';
import './App.css';

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
