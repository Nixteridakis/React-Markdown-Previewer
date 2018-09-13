import React from 'react';
import {EnlargeBar} from './enlargeBar';


const marked = require("marked");

marked.setOptions({
  breaks : true
  });

export class PreviewWindow extends React.Component {
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