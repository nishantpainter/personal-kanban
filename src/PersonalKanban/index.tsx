import React from "react";

import ThemeProvider from "PersonalKanban/providers/ThemeProvider";
import KanbanBoardContainer from "PersonalKanban/containers/KanbanBoard";
import TranslationProvider from "./providers/TranslationProvider";

interface PersonalKanbanProps {}

const PersonalKanban: React.FC<PersonalKanbanProps> = () => {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <KanbanBoardContainer />
      </ThemeProvider>
    </TranslationProvider>
  );
};

export default PersonalKanban;
