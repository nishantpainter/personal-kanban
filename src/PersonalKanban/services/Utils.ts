import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { Column } from "PersonalKanban/types";

export const getId = (): string => {
  return uuidv4();
};

export const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const getCreatedAt = () => {
  return `${moment().format("DD-MM-YYYY")} ${moment().format("h:mm:ss a")}`;
};

export const reorderCards = ({
  columns,
  sourceColumn,
  destinationColumn,
  sourceIndex,
  destinationIndex,
}: {
  columns: Column[];
  sourceColumn: Column;
  destinationColumn: Column;
  sourceIndex: number;
  destinationIndex: number;
}) => {
  const getColumnIndex = (columnId: string) =>
    columns.findIndex((c) => c.id === columnId);

  const getRecords = (columnId: string) => [
    ...columns.find((c) => c.id === columnId)?.records!,
  ];

  const current = getRecords(sourceColumn.id);
  const next = getRecords(destinationColumn.id);
  const target = current[sourceIndex];

  // moving to same list
  if (sourceColumn.id === destinationColumn.id) {
    const reordered = reorder(current, sourceIndex, destinationIndex);
    const newColumns = columns.map((c) => ({ ...c }));
    newColumns[getColumnIndex(sourceColumn.id)].records = reordered;
    return newColumns;
  }

  // moving to different list
  current.splice(sourceIndex, 1);
  next.splice(destinationIndex, 0, target);
  const newColumns = columns.map((c) => ({ ...c }));
  newColumns[getColumnIndex(sourceColumn.id)].records = current;
  newColumns[getColumnIndex(destinationColumn.id)].records = next;
  return newColumns;
};

export const getInitialState = () => {
  return [
    {
      id: getId(),
      title: "Todo",
      color: "Orange",
      records: [
        {
          id: getId(),
          color: "Yellow",
          title: "Clear Board",
          description:
            "Make a fresh start by erasing this board. Click delete button on main toolbar.",
          createdAt: getCreatedAt(),
        },
      ],
      createdAt: getCreatedAt(),
    },
    {
      id: getId(),
      title: "In-Progress",
      color: "Red",
      records: [
        {
          id: getId(),
          color: "Purple",
          title: "Give ratings",
          description: "Rate and Star Personal Kanban",
          createdAt: getCreatedAt(),
        },
      ],
      createdAt: getCreatedAt(),
    },
    {
      id: getId(),
      title: "Completed",
      color: "Green",
      records: [
        {
          id: getId(),
          color: "Indigo",
          title: "Be Awesome",
          description: "Rock the world with your creativity !",
          createdAt: getCreatedAt(),
        },
      ],
      createdAt: getCreatedAt(),
    },
  ];
};
