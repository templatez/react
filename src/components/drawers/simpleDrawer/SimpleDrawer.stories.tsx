import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SimpleDrawer from "./SimpleDrawer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templatez/simpleDrawer/SimpleDrawer",
  component: SimpleDrawer,
} as ComponentMeta<typeof SimpleDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleDrawer> = (args) => (
  <SimpleDrawer {...args} />
);

export const size15: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
size15.args = {
  size: 12,
  fontFamily: "Jua",
  list: [
    {
      title:
        "처음에는 어떻게 만들었나요?sadaddasdasdasdasdadasdadasdasdsdsdsdsdsddsdsddssdsdsdsdsdsddsdsddsdsdsdsdsdsddsdsdd",
      content:
        "asdasdadaasdasdadaasdasdadaasdasdadaasdasdadaasdasdadaasdasdada",
    },
    {
      title: "원하는 카테고리가 없습니다.",
      content: "asdasdada",
    },
  ],
};

export const size20: any = Template.bind({});
size20.args = {
  size: 20,
  list: [
    {
      title: "hello",
      content: "asdasdada",
    },
    {
      title: "bye",
      content: "asdasdada",
    },
  ],
};
