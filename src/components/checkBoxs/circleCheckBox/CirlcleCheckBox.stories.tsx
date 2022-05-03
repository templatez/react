import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBox from "./CirlcleCheckBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Templatez/CheckBoxs/CheckBox",
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckBox> = (args) => (
    <CheckBox {...args} />
);

export const CircleCheckBox: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CircleCheckBox.args = {
    id: "hello",
    name: "hello",
    fontSize: 20,
    onClick: (e: any) => {
        const { checked } = e.target;
        console.log(checked);
    },
};
