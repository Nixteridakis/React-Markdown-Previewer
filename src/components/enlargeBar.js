import React from 'react';

export class EnlargeBar extends React.Component {
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