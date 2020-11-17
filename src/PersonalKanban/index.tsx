import React from "react";

import ThemeProvider from "PersonalKanban/providers/ThemeProvider";
import KanbanBoardContainer from "PersonalKanban/containers/KanbanBoard";
import TranslationProvider from "./providers/TranslationProvider";

interface PersonalKanbanProps {}

const PersonalKanban: React.FC<PersonalKanbanProps> = () => {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <KanbanBoardContainer />
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default PersonalKanban;
