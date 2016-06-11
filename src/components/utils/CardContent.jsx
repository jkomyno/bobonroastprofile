import React from 'react';

class CardContent extends React.Component {
  render() {
    return(
      <div className="mdl-card__supporting-text">
        { this.props.children }
      </div>
    );
  }
}

export default CardContent;
