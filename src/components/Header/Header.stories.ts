import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";
import { HeaderType } from "./enums/HeaderType";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/Header",
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    type: HeaderType.H1,
    children: "Main header",
  },
};

export const H2: Story = {
  args: {
    type: HeaderType.H2,
    children: "Section header",
  },
};

export const H3: Story = {
  args: {
    type: HeaderType.H3,
    children: "Article header",
  },
};
