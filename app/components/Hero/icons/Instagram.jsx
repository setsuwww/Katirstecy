import React from "react";

export const InstagramIcon = ({
  size = 24,
  color = "currentColor",
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0,
}) => {
  const transforms = [];

  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push("scaleX(-1)");
  if (flipVertical) transforms.push("scaleY(-1)");

  const viewBoxSize = 24 + padding * 2;
  const viewBoxOffset = -padding;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`}
      width={size}
      height={size}
      fill="none"
      color={color}
      style={{
        opacity,
        transform: transforms.join(" ") || undefined,
        filter:
          shadow > 0
            ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))`
            : undefined,
      }}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.5 8A4.5 4.5 0 0 1 9 4.5h6A4.5 4.5 0 0 1 19.5 9v6a4.5 4.5 0 0 1-4.5 4.5H9A4.5 4.5 0 0 1 4.5 15zM9 5.5A3.5 3.5 0 0 0 5.5 9v6A3.5 3.5 0 0 0 9 18.5h6a3.5 3.5 0 0 0 3.5-3.5V9A3.5 3.5 0 0 0 15 5.5zm8 2.667a.833.833 0 1 1-1.667 0a.833.833 0 0 1 1.667 0M8.167 12a3.833 3.833 0 1 1 7.666 0a3.833 3.833 0 0 1-7.666 0M12 9.167a2.833 2.833 0 1 0 0 5.666a2.833 2.833 0 0 0 0-5.666"
      />
    </svg>
  );
};
