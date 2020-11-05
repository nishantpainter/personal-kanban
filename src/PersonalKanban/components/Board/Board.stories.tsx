import React from "react";
import faker from "faker";

import Board from "PersonalKanban/components/Board";

const stories = {
  title: "PersonalKanban/Board",
  component: Board,
};

const Template = (args: any) => <Board {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  columns: [
    {
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
      ],
    },
    {
      id: 2,
      title: "In-Progress",
      description: "Task in progress today",
      caption: "WIP Limits : 10",
      records: [
        {
          id: 2,
          title: "Brew Beans",
          description: "Brew arabica coffee",
          caption: "28 Oct 2020 5:40 PM",
        },
        {
          id: 3,
          title: "Bring Filters",
          description:
            "Cremica filter papers. Cone shaped white paper filter for Hario's V60 size 02 pour-over brewers. Contains 100 disposable white size 02 paper filters. These paper filters produce a clean, flavorful, sediment-free cup. Hario's paper filters make for convenient brewing and cleanup.",
          caption: "27 Oct 2020 6:40 AM",
        },
      ],
    },
  ],
};

export const Stress: any = Template.bind({});
Stress.args = {
  columns: new Array(20).fill(0).map((_, id) => ({
    id,
    title: faker.commerce.department(),
    description: faker.lorem.sentence(),
    caption: faker.lorem.words(),
    records: new Array(10).fill(0).map(() => ({
      id: faker.random.uuid(),
      title:
        faker.commerce.productAdjective() + faker.commerce.productDescription(),
      description: faker.lorem.sentences(),
      caption: faker.lorem.words(),
    })),
  })),
};

export const Empty: any = Template.bind({});
Empty.args = {
  columns: [],
};

export default stories;
