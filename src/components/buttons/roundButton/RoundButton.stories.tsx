import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RoundButton from "./RoundButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templatez/Buttons/RoundButton",
  component: RoundButton,
} as ComponentMeta<typeof RoundButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RoundButton> = (args) => <RoundButton {...args} />;

export const HelloWorld:any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
  size: 10,
  backgroundColor: '#343243',
  fontColor: '#fff',
  fontSize: 10
};

export const ClickMe:any = Template.bind({});
ClickMe.args = {
  label: "Click me!",
  size: 20,
};