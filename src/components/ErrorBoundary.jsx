import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="error-panel" role="alert">
          <div>
            <p className="eyebrow">Application error</p>
            <h1>The LUXSY site could not render.</h1>
            <p>{this.state.error.message}</p>
            <p>Check the StackBlitz terminal and browser console, then restart the Vite dev server.</p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
