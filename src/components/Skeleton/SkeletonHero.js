import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonHero = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={500}
    viewBox="0 0 800 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="291" cy="106" r="103" /> 
    <rect x="190" y="225" rx="0" ry="0" width="200" height="33" /> 
    <rect x="202" y="286" rx="0" ry="0" width="178" height="183" /> 
    <rect x="305" y="356" rx="0" ry="0" width="16" height="7" />
  </ContentLoader>
)

export default SkeletonHero;

