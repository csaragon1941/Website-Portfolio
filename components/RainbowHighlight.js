import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, darkColor, theme, children }) => {
  // Change the animation duration depending on the length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);

  // Define the colors for light and dark mode
  const lightColor = color;
  const currentColor = theme === "dark" ? darkColor : lightColor;

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={currentColor}
    >
      {children}
    </RoughNotation>
  );
};
