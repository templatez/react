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

export const HelloWorld: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: "Hello world!",
    size: 10,
};

export const ClickMe2: any = Template.bind({});
ClickMe2.args = {
    label: "Click me!",
    size: 20,
};

export const ClickMe: any = Template.bind({});
ClickMe.args = {
    label: "Click me!",
    size: 30,
};
