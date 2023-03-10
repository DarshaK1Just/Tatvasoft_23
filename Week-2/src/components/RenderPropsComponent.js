import React, { Component } from 'react';

class RenderPropsComponent extends Component {
  render() {
    return (
      <div className='p2'>
        {this.props.render()}
      </div>
    );
  }
}

export default RenderPropsComponent;