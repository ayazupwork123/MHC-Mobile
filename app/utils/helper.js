"use strict";

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const screenHeight = Dimensions.get('screen').height;

//Guideline sizes 
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const navbarHeight = screenHeight - height ;

const range = (start, end)  => {
  const isReverse = (start > end);
  const targetLength = isReverse ? (start - end) + 1 : (end - start ) + 1;
  const arr = new Array(targetLength);
  const b = Array.apply(null, arr);
  const result = b.map((discard, n) => {
    return (isReverse) ? n + end : n + start;
  });

  return (isReverse) ? result.reverse() : result;
}

export { scale, verticalScale, moderateScale ,navbarHeight, range};