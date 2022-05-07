import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import VerticalMarquee from "./VerticalMarquee";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templatez/Marquees/VerticalMarquee",
  component: VerticalMarquee,
} as ComponentMeta<typeof VerticalMarquee>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VerticalMarquee> = (args) => <VerticalMarquee {...args} />;

export const HelloWorld:any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'test',
  data: ['1', '2','3','4','5'],
  rollingWidth: 200,
  borderRadius: 10,
  labelColor: '#cecece',
};
