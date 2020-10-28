import React from "react";

import KanbanCard from "PersonalKanban/components/KanbanCard";

const stories = {
  title: "PersonalKanban/KanbanCard",
  component: KanbanCard,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "violet",
          "indigo",
          "blue",
          "green",
          "yellow",
          "orange",
          "red",
          "default",
        ],
      },
    },
  },
};

const Template = (args: any) => <KanbanCard {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  title: "Make Coffee",
  description: "Brew vanilla coffee",
  caption: "28 Oct 2020 5:40 PM",
};
Default.parameters = {
  withWrapper: true,
};

export const LongTitle: any = Template.bind({});
LongTitle.args = {
  ...Default.args,
  title: "Make Coffee with a very secretive recipe",
};
LongTitle.parameters = {
  ...Default.parameters,
};

export const LongDescription: any = Template.bind({});
LongDescription.args = {
  ...Default.args,
  description:
    "With four ingredients and no special device or machine you can make one of the best tasting coffee at home with Nescafe. It takes also less than 15 minutes to make this awesome homemade instant coffee.",
};
LongDescription.parameters = {
  ...Default.parameters,
};

export const Colored: any = Template.bind({});
Colored.args = {
  ...Default.args,
  color: "red",
};
Colored.parameters = {
  ...Default.parameters,
};

export default stories;
