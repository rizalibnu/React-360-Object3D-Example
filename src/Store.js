import * as React from 'react';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
  rotate: {
    x: 0,
    y: 0,
  },
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function setRotate(value) {
  State.rotate = value;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      rotate: State.rotate,
    };

    _listener = () => {
      this.setState({
        rotate: State.rotate,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return <Component {...this.props} rotate={this.state.rotate} />;
    }
  };
}
