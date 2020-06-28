import React from "react";
import { action } from "@storybook/addon-actions";

import Button from ".";

export default {
  title: "Atoms/Button",
  parameters: {
    componentSubtitle: "A basic button",
  },
  component: Button,
};

export const Default = () => (
  <Button onClick={action("onClick")}>Action</Button>
);
