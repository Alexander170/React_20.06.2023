import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="135" /> 
    <rect x="0" y="285" rx="10" ry="10" width="280" height="38" /> 
    <rect x="99" y="310" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="350" rx="10" ry="10" width="280" height="83" /> 
    <rect x="0" y="461" rx="10" ry="10" width="95" height="30" /> 
    <rect x="123" y="452" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;