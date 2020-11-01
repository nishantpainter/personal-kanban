import React from "react";

import ColumnForm from "PersonalKanban/components/ColumnForm";

const stories = {
  title: "PersonalKanban/ColumnForm",
  component: ColumnForm,
};

const Template = (args: any) => <ColumnForm {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  Column: {
    title: "Todo",
    description: "Task to be done",
  },
};
Default.parameters = {
  withWrapper: true,
};

export const Disabled: any = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.parameters = {
  ...Default.parameters,
};

export default stories;
