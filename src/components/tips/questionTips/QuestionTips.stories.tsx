import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import QuestionTips from "./QuestionTips";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Templatez/Tips/QuestionTips",
    component: QuestionTips,
} as ComponentMeta<typeof QuestionTips>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QuestionTips> = (args) => (
    <QuestionTips {...args} />
);

export const size15: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
size15.args = {
    size: 15,
    text: "안녕하세요. 만나서 반갑습니다.",
    side: "middleright",
};

export const size20: any = Template.bind({});
size20.args = {
    size: 30,
    text: "안녕하세요. 만나서 반갑습니다.",
    side: "middleright",
};
