import React, { FunctionComponent } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface Props {
  filterClickHandler: () => void;
  position:
    | PositionTopLeft
    | PositionTopRight
    | PositionBottomLeft
    | PositionBottomRight;
  //floatingButtonStyles: { [key: string | number]: string | number };
}

interface PositionTopLeft {
  top: number;
  left: number;
}
interface PositionTopRight {
  top: number;
  right: number;
}
interface PositionBottomLeft {
  bottom: number;
  left: number;
}
interface PositionBottomRight {
  bottom: number;
  right: number;
}

const FloatingFilterButton: FunctionComponent<Props> = (props) => {
  const { filterClickHandler, position } = props;
  return (
    <TouchableOpacity
      onPress={filterClickHandler}
      style={[styles.container, { ...position }]}>
      <ImageBackground
        source={require("./../assets/filter-circle.png")}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("./../assets/filter.png")}
          style={{ width: 18, height: 18 }}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    position: "absolute",
    zIndex: 1,
  },
});

export default FloatingFilterButton;
