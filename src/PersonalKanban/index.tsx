import React from "react";

import ThemeProvider from "PersonalKanban/providers/ThemeProvider";

interface PersonalKanbanProps {}

const PersonalKanban: React.FC<PersonalKanbanProps> = () => {
  return (
    <ThemeProvider>
      <h3>Personal Kanban</h3>
    </ThemeProvider>
  );
};

export default PersonalKanban;
