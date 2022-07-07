import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SimpleToggle from "./SimpleToggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Templatez/Toggles/SimpleToggle",
    component: SimpleToggle,
} as ComponentMeta<typeof SimpleToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleToggle> = (args) => (
    <SimpleToggle {...args} />
);

export const size15: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
size15.args = {
    size: 15,
    leftData: { name: "무료 등록", id: "left" },
    rightData: { name: "유료 등록", id: "left" },
    onClick: (e: any) => {
        console.log(e);
    },
    disabled: true,
};

export const size20: any = Template.bind({});
size20.args = {
    size: 20,
    leftData: { name: "무료 등록", id: "left" },
    rightData: { name: "유료 등록", id: "left" },
    onClick: (e: any) => {
        console.log(e);
    },
};
