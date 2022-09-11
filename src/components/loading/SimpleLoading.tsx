import React from "react";
import "./SimpleLoading.scss";

export interface SimpleLoadingProps {
  size?: number;
}

const SimpleLoading = ({ size }: SimpleLoadingProps) => {
  return (
    <div className="tzr-simple-loading" style={{ fontSize: `${size}px` }}></div>
  );
};

export default SimpleLoading;
