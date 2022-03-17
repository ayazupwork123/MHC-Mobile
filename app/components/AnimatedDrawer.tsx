import React, { useEffect, useState } from 'react';
import { useDrawerStatus } from "@react-navigation/drawer";
import { Animated, Easing } from "react-native";

const AnimatedDrawer = (Component: any) => ({ ...props }) => {

  const status = useDrawerStatus();

  // Track the scaling factor of the screen. 1 = full, 0 = invisible.
  const [scale] = useState(new Animated.Value(1));
  const [border] = useState(new Animated.Value(0));

  useEffect(() => {
    const isClosed = status === "closed";

    const animation = Animated.timing(scale, {
      toValue: isClosed ? 1 : 0.7, // Play around with this value.
      duration: 100,
      easing: Easing.cubic,
      useNativeDriver: false,
    });

    const borderAnimation =  Animated.timing(border, {
      toValue: isClosed ? 0 : 30,
      duration: 0,
      useNativeDriver: false
    })

    animation.start();
    borderAnimation.start()

    return () => {
      animation.stop();
      borderAnimation.stop();
    }
  }, [status]);

  return (
    <Animated.View
      style={{
        flex: 1,
        borderRadius:border.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 30],
          extrapolate: "identity"
        }),
        overflow: "hidden",
        transform: [{
          scale: scale.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "identity"
          })
        }]
      }}
    >
      <Component  {...props}/>
    </Animated.View>
  )
}

export default AnimatedDrawer