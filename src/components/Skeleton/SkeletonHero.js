import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonHero = (props) => (
  <ContentLoader
    speed={2}
    width={800}
    height={650}
    viewBox="0 0 800 650"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="370" cy="155" r="125" />
    <rect x="254" y="305" rx="0" ry="0" width="234" height="38" />
    <rect x="239" y="371" rx="0" ry="0" width="265" height="271" />
    <rect x="384" y="370" rx="0" ry="0" width="16" height="7" />
  </ContentLoader>
);

export default SkeletonHero;
