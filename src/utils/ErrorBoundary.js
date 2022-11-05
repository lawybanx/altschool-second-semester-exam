import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='container'>
          <h1>Something went wrong ☹️</h1>
          <a href='/'>Go back home</a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
