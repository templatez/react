import React from "react";
import "./CirlcleCheckBox.scss";
import classnames from "classnames";
import { IoCheckmarkSharp } from "react-icons/io5";

export interface CirlcleCheckBoxProps {
    label: string;
    size?: number;
    backgroundColor?: string;
    fontColor?: string;
    fontSize?: number;
    onClick: any;
    disabled?: boolean;
    name: string;
    id: string;
    value: any;
}

const CirlcleCheckBox = ({
    label,
    size,
    backgroundColor,
    fontColor,
    fontSize,
    onClick,
    disabled,
    id,
    name,
    value,
}: CirlcleCheckBoxProps) => {
    return (
        <div id="circle-checkbox">
            <div className="checkbox-wrap">
                <div
                    className="checkbox"
                    style={{
                        padding: `${size}px`,
                    }}
                >
                    <div id="circle-checkmark-wrap">
                        <IoCheckmarkSharp
                            // @ts-ignore
                            size={size * 1.5}
                            style={{ verticalAlign: "middle" }}
                        />
                    </div>
                </div>
                {/* <input
                    type="checkbox"
                    className=""
                    id={id}
                    name={name}
                    value={value}
                    style={{
                        padding: `${size}px`,
                    }}
                /> */}
            </div>
            <div
                className="checkbox-label-wrap"
                style={{
                    height: `${(size || 10) * 2}px`,
                    lineHeight: `${(size || 10) * 2}px`,
                    fontSize: `${fontSize}`,
                }}
            >
                <label htmlFor={name}>{label}</label>
            </div>
        </div>
    );
};

export default CirlcleCheckBox;
