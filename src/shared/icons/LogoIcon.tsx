import React, { CSSProperties } from 'react';

interface Props {
  size?: number;
  style?: CSSProperties;
};
  
const LogoIcon = ({ style, size = 120 }: Props) => (
  <div style={style}>
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 120) / 507}
      viewBox="0 0 507 120"
      x="0"
      y="0"
    >
      <image width="507" height="120" href="https://www.adopets.com/assets/images/writen-logo.png" />
    </svg>
  </div>
);

export default LogoIcon;
