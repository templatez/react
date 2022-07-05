import React from "react";
import "./RoundButton.scss";
import classnames from "classnames";

export interface RoundButtonProps {
  label: string;
  size?: number;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: number;
  onClick: any;
  disabled?: boolean;
}

const RoundButton = ({
  label,
  size,
  backgroundColor,
  fontColor,
  fontSize,
  onClick,
  disabled,
}: RoundButtonProps) => {
  return (
    <div className="tzr-common-roundbutton">
      <button
        className={classnames("btn")}
        onClick={onClick}
        style={{
          padding: `${size || 10}px ${(size || 10) * 2}px`,
          backgroundColor: `${backgroundColor}`,
          color: `${fontColor}`,
          fontSize: `${fontSize}px`,
        }}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default RoundButton;
