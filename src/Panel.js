import React from 'react';
import { StyleSheet, Text, View, VrButton } from 'react-360';
import { connect, setRotate } from './Store';

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

class Panel extends React.Component {
  handleIncrease = (axis) => {
    setRotate({
      ...this.props.rotate,
      [axis]: this.props.rotate[axis] + 10,
    });
  };

  handleDecrease = (axis) => {
    setRotate({
      ...this.props.rotate,
      [axis]: this.props.rotate[axis] - 10,
    });
  };

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.buttonWrapper}>
          <VrButton
            onClick={() => this.handleDecrease('x')}
            style={styles.button}
          >
            <Text style={styles.text}>Rotate X (-)</Text>
          </VrButton>
          <View style={{ width: 10 }} />
          <VrButton
            onClick={() => this.handleIncrease('x')}
            style={styles.button}
          >
            <Text style={styles.text}>Rotate X (+)</Text>
          </VrButton>
        </View>
        <View style={{ height: 10 }} />
        <View style={styles.buttonWrapper}>
          <VrButton
            onClick={() => this.handleDecrease('y')}
            style={styles.button}
          >
            <Text style={styles.text}>Rotate Y (-)</Text>
          </VrButton>
          <View style={{ width: 10 }} />
          <VrButton
            onClick={() => this.handleIncrease('y')}
            style={styles.button}
          >
            <Text style={styles.text}>Rotate Y (+)</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

export default connect(Panel);
