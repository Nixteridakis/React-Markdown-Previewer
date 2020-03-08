import React from 'react';
import {EnlargeBar} from './enlargeBar';

export class MarkdownWindow extends React.Component {
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