import React, { useState } from "react";
import "./SimpleToggle.scss";
import classnames from "classnames";

export interface SimpleToggleProps {
  size?: number;
  leftData: {
    name: string;
    id: string;
  };
  rightData: {
    name: string;
    id: string;
  };
  onClick: (e: any) => void;
  disabled?: boolean;
}

const SimpleToggle = ({
  size,
  leftData,
  rightData,
  onClick,
  disabled,
}: SimpleToggleProps) => {
  const [isActive, setIsActive] = useState("left");
  const onToggle = (e: any) => {
    if (disabled) return;
    onClick(e.target.id);
    setIsActive(e.target.dataset.name);
  };
  return (
    <div className="tzr-simple-toggle" style={{ fontSize: `${size}px` }}>
      <div className="simple-toggle">
        <span
          onClick={onToggle}
          id={leftData.id}
          data-name="left"
          className={classnames(
            "left",
            isActive === "left" ? "active" : "deactive"
          )}
        >
          {leftData.name}
        </span>
        <span
          onClick={onToggle}
          id={rightData.id}
          data-name="right"
          className={classnames(
            "right",
            isActive === "right" ? "active" : "deactive"
          )}
        >
          {rightData.name}
        </span>
      </div>
    </div>
  );
};

export default SimpleToggle;
