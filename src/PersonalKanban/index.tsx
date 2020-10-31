import React from "react";

import ThemeProvider from "PersonalKanban/providers/ThemeProvider";
import KanbanBoardContainer from "PersonalKanban/containers/KanbanBoard";

interface PersonalKanbanProps {}

const PersonalKanban: React.FC<PersonalKanbanProps> = () => {
  return (
    <ThemeProvider>
      <KanbanBoardContainer />
    </ThemeProvider>
  );
};

export default PersonalKanban;
