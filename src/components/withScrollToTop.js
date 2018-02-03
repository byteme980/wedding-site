import React from 'react';

function withScrollToTop(Component) {
  class wrapper extends React.Component {
    componentDidMount() {
      window.scroll(0, 0)
    }
    render() {
      return (
        <Component {...this.props} />
      )
    }
  }
  return wrapper;
}

export default withScrollToTop;
