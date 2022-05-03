import React, { useState, useRef, useEffect } from "react";
import "./CirlcleCheckBox.scss";
import classnames from "classnames";
import { IoCheckmarkSharp } from "react-icons/io5";

export interface CirlcleCheckBoxProps {
    label?: string;
    size?: number;
    markColor?: string;
    fontSize?: number;
    onClick: any;
    name: string;
    id: string;
    value: any;
    checked?: boolean;
}

const CirlcleCheckBox = ({
    label,
    size,
    markColor,
    fontSize,
    onClick,
    id,
    name,
    value,
    checked,
}: CirlcleCheckBoxProps) => {
    const checkRef = useRef(null);
    const [isActive, setIsActive] = useState(checked || false);
    const [color, setColor] = useState<string>("#1DDB16");
    useEffect(() => {
        if (markColor) {
            setColor(markColor);
        }
    }, []);
    const onActive = () => {
        setIsActive(!isActive);
        // @ts-ignore
        checkRef.current.click();
    };
    return (
        <div id="circle-checkbox">
            <div className="checkbox-wrap">
                <div
                    className={classnames(
                        "checkbox",
                        isActive ? "active" : "deactive"
                    )}
                    style={{
                        padding: `${size}px`,
                        outline: isActive
                            ? `1px solid ${color}`
                            : `1px solid #cecece`,
                        backgroundColor: isActive ? `#fff` : `#cecece`,
                    }}
                    onClick={onActive}
                >
                    <div id="circle-checkmark-wrap">
                        <IoCheckmarkSharp
                            color={isActive ? color : "#fff"}
                            size={(size || 10) * 1.5}
                            style={{ verticalAlign: "middle" }}
                        />
                    </div>
                </div>
                <input
                    ref={checkRef}
                    hidden
                    type="checkbox"
                    id={id}
                    name={name}
                    value={value}
                    onClick={onClick}
                    checked={isActive}
                    style={{
                        padding: `${size}px`,
                    }}
                />
            </div>
            {label && (
                <div
                    className="checkbox-label-wrap"
                    style={{
                        height: `${(size || 10) * 2 + 5}px`,
                        lineHeight: `${(size || 10) * 2 + 5}px`,
                        fontSize: `${fontSize}px`,
                    }}
                >
                    <label htmlFor={name}>{label}</label>
                </div>
            )}
        </div>
    );
};

export default CirlcleCheckBox;
