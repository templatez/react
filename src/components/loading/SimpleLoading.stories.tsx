import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SimpleLoading from "./SimpleLoading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templatez/Loading/SimpleLoading",
  component: SimpleLoading,
} as ComponentMeta<typeof SimpleLoading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleLoading> = (args) => (
  <SimpleLoading {...args} />
);

export const size15: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
size15.args = {
  size: 15,
};

export const size20: any = Template.bind({});
size20.args = {
  size: 40,
};
