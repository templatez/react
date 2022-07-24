import React, { useState } from "react";
import "./QuestionTips.scss";

export interface QuestionTipsProps {
    size?: number;
    text?: any;
    side: string;
}

const QuestionTips = ({ size, text, side }: QuestionTipsProps) => {
    const [isActive, setIsActive] = useState(false);
    const onHover = () => setIsActive(!isActive);
    return (
        <div
            onMouseOver={onHover}
            onMouseOut={onHover}
            className="tzr-question-tips"
            style={{ fontSize: `${size}px` }}
        >
            <div className="question-tips">
                <div className="question-mark">?</div>
                {isActive && <div className={`${side}-tips`}>{text}</div>}
            </div>
        </div>
    );
};

export default QuestionTips;
