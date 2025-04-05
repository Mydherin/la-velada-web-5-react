interface XIconProps {
  width?: string;
  height?: string;
  className?: string;
}

const XIcon = ({ width = "35px", height = "48px", className }: XIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 35 32"
    role="img"
    aria-label="X Logo"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <path
        style={{
          stroke: "none",
          fillRule: "nonzero",
          fill: "currentColor",
          fillOpacity: 1,
        }}
        d="M 27.535156 0 L 32.898438 0 L 21.117188 13.578125 L 34.882812 32 L 24.078125 32 L 15.621094 20.804688 L 5.9375 32 L 0.570312 32 L 13.054688 17.476562 L -0.128906 0 L 10.941406 0 L 18.585938 10.226562 Z M 25.65625 28.8125 L 28.628906 28.8125 L 9.378906 3.070312 L 6.183594 3.070312 Z M 25.65625 28.8125"
      />
    </g>
  </svg>
);

export default XIcon;
