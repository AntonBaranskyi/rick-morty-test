import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={244}
    viewBox="0 0 240 244"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="14" rx="0" ry="0" width="230" height="123" />
    <rect x="23" y="150" rx="10" ry="10" width="119" height="29" />
    <rect x="38" y="195" rx="10" ry="10" width="81" height="20" />
  </ContentLoader>
);

export default Skeleton;
