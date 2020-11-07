import React from "react";

import Column from "PersonalKanban/components/Column";

const stories = {
  title: "PersonalKanban/Column",
  component: Column,
};

const Template = (args: any) => <Column {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  column: {
    id: 1,
    title: "Todo",
    description: "Task to be done today",
    caption: "WIP Limits : 5",
    records: [
      {
        id: 1,
        title: "Make Coffee",
        description: "Brew vanilla coffee",
        caption: "28 Oct 2020 5:40 PM",
      },
      {
        id: 2,
        title: "Bring filters",
        description: "Cremica filter papers",
        caption: "28 Oct 2020 5:40 PM",
      },
    ],
  },
};
Default.parameters = {
  withWrapper: true,
};

export const EmptyDescription: any = Template.bind({});
EmptyDescription.args = {
  column: {
    ...Default.args.column,
    description: "",
  },
};
EmptyDescription.parameters = {
  ...Default.parameters,
};

export const LongTitle: any = Template.bind({});
LongTitle.args = {
  column: {
    ...Default.args.column,
    title: "Todo Nunc non ante id eros congue aliquet.",
  },
};
LongTitle.parameters = {
  ...Default.parameters,
};

export const LongDescription: any = Template.bind({});
LongDescription.args = {
  column: {
    ...Default.args.column,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante id eros congue aliquet.",
  },
};
LongDescription.parameters = {
  ...Default.parameters,
};

export const LongCaption: any = Template.bind({});
LongCaption.args = {
  column: {
    ...Default.args.column,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non ante id eros congue aliquet.",
  },
};
LongCaption.parameters = {
  ...Default.parameters,
};

export const NoRecord: any = Template.bind({});
NoRecord.args = {
  column: {
    ...Default.args.column,
    records: [],
  },
};

NoRecord.parameters = {
  ...Default.parameters,
};

export default stories;
