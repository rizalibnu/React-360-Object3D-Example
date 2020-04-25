import React from 'react';
import { Animated, View, asset } from 'react-360';
import Entity from 'Entity';
import { connect } from './Store';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

class Heli extends React.Component {
  rotationX = new Animated.Value(0);
  rotationY = new Animated.Value(0);

  componentDidUpdate(nextProps) {
    if (nextProps.rotate.x !== this.props.rotate.x) {
      Animated.timing(this.rotationX, {
        toValue: this.props.rotate.x,
        duration: 1000,
      }).start();
    }

    if (nextProps.rotate.y !== this.props.rotate.y) {
      Animated.timing(this.rotationY, {
        toValue: this.props.rotate.y,
        duration: 1000,
      }).start();
    }
  }

  render() {
    return (
      <View>
        <AnimatedEntity
          source={{ obj: asset('heli.obj'), mtl: asset('heli.mtl') }}
          style={{
            transform: [
              { translate: [-10, 0, -10] },
              { rotateX: this.rotationX },
              { rotateY: this.rotationY },
            ],
          }}
        />
      </View>
    );
  }
}

export default connect(Heli);
