# Personal Kanban

[English](https://github.com/nishantpainter/personal-kanban/blob/main/README.md) - [Français](https://github.com/nishantpainter/personal-kanban/blob/main/README_FR.md) - [Español](https://github.com/nishantpainter/personal-kanban/blob/main/README_ES.md) - [Pусский](https://github.com/nishantpainter/personal-kanban/blob/main/README_RU.md) - [Deutsche](https://github.com/nishantpainter/personal-kanban/blob/main/README_DE.md) - [हिंदी](https://github.com/nishantpainter/personal-kanban/blob/main/README_IN.md) - [中文](https://github.com/nishantpainter/personal-kanban/blob/main/README_CN.md) - [日本人](https://github.com/nishantpainter/personal-kanban/blob/main/README_JP.md)

Personal Kanban is an offline capable application or tool that implements kanban to manage work at personal level. Work items can be represented as cards and columns to depict each stage of your work process. Columns can be as simple as "todo", "in-progess" and "done", or it can be complex to suite your flow.

It's a tool to visualize and optimize your work flow. Physical board are popular among few, while virtual board like Personal Kanban plays a critical role in agile software development considering their accessibility, simplicity and elegant display. Regardless of whether a board is physical or virtual, it must depict work visually along with clearly identifying the blockage and other dependencies. Each of this feature are offered seamlessly by Personal Kanban.

Plan your work with flexibility, identify and resolve bottlenecks and overview your complete work visually.

# Table of Contents

- **[What is Kanban Board](https://github.com/nishantpainter/personal-kanban#what-is-kanban-board)**
- **[How to Use](https://github.com/nishantpainter/personal-kanban#how-to-use)**
  - **[Add Column](https://github.com/nishantpainter/personal-kanban#add-column)**
  - **[Edit Column](https://github.com/nishantpainter/personal-kanban#edit-column)**
  - **[Delete Column](https://github.com/nishantpainter/personal-kanban#delete-column)**
  - **[Move Column](https://github.com/nishantpainter/personal-kanban#move-card)**
  - **[Add Card](https://github.com/nishantpainter/personal-kanban#add-card)**
  - **[Edit Card](https://github.com/nishantpainter/personal-kanban#edit-card)**
  - **[Delete Card](https://github.com/nishantpainter/personal-kanban#delete-card)**
  - **[Move Card](https://github.com/nishantpainter/personal-kanban#move-card)**
  - **[Clear Board](https://github.com/nishantpainter/personal-kanban#clear-board)**
  - **[Change Language](https://github.com/nishantpainter/personal-kanban#change-language)**
  - **[Toggle Dark Mode](https://github.com/nishantpainter/personal-kanban#toggle-dark-mode)**
- **[Localization](https://github.com/nishantpainter/personal-kanban#localization)**
- **[Dark Mode](https://github.com/nishantpainter/personal-kanban#dark-mode)**
- **[Offline Usage](https://github.com/nishantpainter/personal-kanban#offline-usage)**
- **[Development](https://github.com/nishantpainter/personal-kanban#development)**
- **[Privacy](https://github.com/nishantpainter/personal-kanban#privacy)**
- **[Other References](https://github.com/nishantpainter/personal-kanban#other-references)**

## What is Kanban Board

It is an agile project management tool that helps you visualize your work, limit your work-in-progress(wip) and to craft & optimize your work flow to get the maximum output. To achieve this, it makes use of columns and cards. Personal kanban offers visual clue, columns, wip limits, start point and end point to set you up for success.

## How to Use

You can access the application by visiting [Website](https://nishantpainter.github.io/personal-kanban). The application has a features set as follows :

### Add Column

Add a new column by click on + icon button from the toolbar. Enter the details of the column, including title ( mandatory ), description, background color and wip limit.

### Edit Column

Edit the column by click on edit icon button besides column title. Update the form and click submit for commiting change or cancel to close the dialog.

### Delete Column

Delete the column by click on delete icon button besides edit icon button. This will delete the column along with all the records for the column.

### Move Column

Hold and drag the column from it's body or column header to move it across other columns on the board.

### Add Card

Add a new card by click on add icon button beneath column title / description. Enter the details of the card title ( mandatory ), description and background color. On submitting a new card will be added to column with created timestamp as caption.

### Edit Card

Edit the card by click on edit icon button besides card title. Update the form and click submit for commiting change or cancel to close the dialog.

### Delete Card

Delete the card by click on delete icon button besides card edit icon button. This will delete the card from the column.

### Delete All Card

Delete all the card belonging to the column by clicking on the delete icon button besides add card icon button. It will remove entire card list from column.

### Move Card

Hold and drag the card from it's body or card header to move it across other columns card list on the board.

### Clear Board

Click on the delete icon button from the toolbar to clear entire board. It will delete all the columns and cards from the board.

### Change Language

You can change language of the application by clicking on the globe icon button in the toolbar. Select suitable language from the menu and the application locale will be change to selected language

### Toggle Dark Mode

You can toggle between the dark mode by clicking on the icon button from the toolbar.

## Dark Mode

Dark mode helps you quickly turn the screen to dark ( while using during night). Toolbar offers you icon button that serve as an on/off switch for dark mode.

## Localization

Personal kanban offers local support for language including :

- English
- Français
- Español
- Pусский
- Deutsche
- हिंदी
- 中文

## Offline Usage

The application is registered with service workers and behaves as a progressive web application ([PWA](https://en.wikipedia.org/wiki/Progressive_web_application)). For offline usage you can select the **Add To Home** option, while accessing application in browser, to install the application locally to your mobile devices.

## Development

The application is scaffolded using create-react-app ([CRA](https://create-react-app.dev/docs/getting-started/)) with [Typescript](https://www.typescriptlang.org/) templating. You can clone the [Personal Kanban](https://github.com/nishantpainter/personal-kanban) repository for custom development.

## Privacy

The application makes use of local storage for persisting your work hour lines and does not store any timesheet data on any sort of server. The application uses Google analytics to get an overview of the application usage.

## Other References

- [What is kanban](https://www.atlassian.com/agile/kanban)
- [What is Kanban Board](https://en.wikipedia.org/wiki/Kanban_board#:~:text=A%20Kanban%20board%20is%20one,each%20stage%20of%20the%20process.)
- [Kanban vs Scrum](https://www.atlassian.com/agile/kanban/kanban-vs-scrum)
