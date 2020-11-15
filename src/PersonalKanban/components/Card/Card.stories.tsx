import React from "react";

import Card from "PersonalKanban/components/Card";

const stories = {
  title: "PersonalKanban/Card",
  component: Card,
};

const Template = (args: any) => <Card {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  record: {
    id: 1,
    title: "Make Coffee",
    description: "Brew vanilla coffee",
    createdAt: "28 Oct 2020 5:40 PM",
  },
};
Default.parameters = {
  withWrapper: true,
};

export const LongTitle: any = Template.bind({});
LongTitle.args = {
  record: {
    ...Default.args.record,
    title: "Make Coffee with a very secretive recipe",
  },
};
LongTitle.parameters = {
  ...Default.parameters,
};

export const LongDescription: any = Template.bind({});
LongDescription.args = {
  record: {
    ...Default.args.record,
    description:
      "With four ingredients and no special device or machine you can make one of the best tasting coffee at home with Nescafe. It takes also less than 15 minutes to make this awesome homemade instant coffee.",
  },
};
LongDescription.parameters = {
  ...Default.parameters,
};

export const LongCaption: any = Template.bind({});
LongCaption.args = {
  record: {
    ...Default.args.record,
    createdAt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};
LongCaption.parameters = {
  ...Default.parameters,
};

export default stories;
