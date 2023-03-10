import React from 'react';

const HOC = (WrappedComponent, data) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} {...data} />;
    }
  };
};

export default HOC;