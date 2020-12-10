<p align="center">
  <a href="https://nishantpainter.github.io/personal-kanban/" rel="noopener" target="_blank"><img width="756" src="https://nishantpainter.github.io/personal-kanban/readme_logo.png" alt="Personal Kanban logo"></a></p>
</p>

#

<p align="center">
  A virtual offline Kanban Board for your personal projects and work flows.
</p>

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/description.gif" alt="Description GIF" style="border-radius:16px"></p>
</p>

[![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://nishantpainter.github.io/personal-kanban) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/github/license/day8/re-frame.svg)](https://github.com/nishantpainter/personal-kanban/blob/main/license.txt) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue.svg)](https://github.com/nishantpainter/personal-kanban/commits/main) [![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/nishantpainter/personal-kanban/issues)

[English](https://github.com/nishantpainter/personal-kanban/blob/main/README.md) - [Français](https://github.com/nishantpainter/personal-kanban/blob/main/README_FR.md) - [Español](https://github.com/nishantpainter/personal-kanban/blob/main/README_ES.md) - [Pусский](https://github.com/nishantpainter/personal-kanban/blob/main/README_RU.md) - [Deutsche](https://github.com/nishantpainter/personal-kanban/blob/main/README_DE.md) - [हिंदी](https://github.com/nishantpainter/personal-kanban/blob/main/README_IN.md) - [中文](https://github.com/nishantpainter/personal-kanban/blob/main/README_CN.md) - [日本人](https://github.com/nishantpainter/personal-kanban/blob/main/README_JP.md)

Personal Kanban is an offline capable application or tool that implements kanban to manage work at personal level. Work items can be represented as records and columns to depict each stage of your work process. Columns can be as simple as "todo", "in-progress" and "done", or it can be complex to suit your flow.

It's a tool to visualize and optimize your workflow. Physical boards are popular among few, while virtual boards like Personal Kanban play a critical role in agile software development considering their accessibility, simplicity and elegant display. Regardless of whether a board is physical or virtual, it must depict work visually along with clearly identifying the blockage and other dependencies. Each of these features are offered seamlessly by Personal Kanban.

Plan your work with flexibility, identify and resolve bottlenecks and overview your complete work visually.

# Table of Contents

- **[Introduction](#introduction)**
- **[Features](#features)**
- **[How to Use](#how-to-use)**
  - **[Add Column](#add-column)**
  - **[Edit Column](#edit-column)**
  - **[Delete Column](#delete-column)**
  - **[Move Column](#move-record)**
  - **[Add Record](#add-record)**
  - **[Edit Record](#edit-record)**
  - **[Delete Record](#delete-record)**
  - **[Move Record](#move-record)**
  - **[Delete All Records](#delete-all-records)**
  - **[Clear Board](#clear-board)**
  - **[Change Language](#change-language)**
  - **[Toggle Dark Mode](#toggle-dark-mode)**
- **[Dark Mode](#dark-mode)**
- **[Localization](#localization)**
- **[Offline Usage](#offline-usage)**
- **[Development](#development)**
- **[Privacy](#privacy)**
- **[Other References](#other-references)**

## Introduction

It is an agile project management tool that helps you visualize your work, limit your work-in-progress(wip) and to craft & optimize your work flow to get the maximum output. To achieve this, it makes use of columns and records. Personal kanban offers visual clue, columns, wip limits, start point and end point to set you up for success.

## Features

A few of the things you can do with Personal Kanban:

- Add, Edit, Delete Columns
- Move Columns
- Add, Edit, Delete Records
- Move Records
- Restrict WIP limits for Columns
- Manage Column and Records Background Colors
- Clear Board
- Dark Mode
- Localization Support
- Offline local storage

## How to Use

You can access the application by visiting [Website](https://nishantpainter.github.io/personal-kanban/). The application has a features set as follows :

### Add Column

Add a new column by click on + icon button from the toolbar. Enter the details of the column, including title ( mandatory ), description, background color and wip limit.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/add_column.gif" alt="Add Column GIF" style="border-radius:16px"></p>
</p>

### Edit Column

Edit the column by click on edit icon button besides column title. Update the form and click submit for commiting change or cancel to close the dialog.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/edit_column.gif" alt="Edit Column GIF" style="border-radius:16px"></p>
</p>

### Delete Column

Delete the column by click on delete icon button besides edit icon button. This will delete the column along with all the records for the column.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_column.gif" alt="Delete Column GIF" style="border-radius:16px"></p>
</p>

### Move Column

Hold and drag the column from it's body or column header to move it across other columns on the board.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/move_column.gif" alt="Move Column GIF" style="border-radius:16px"></p>
</p>

### Add Record

Add a new record by click on add icon button beneath column title / description. Enter the details of the record title ( mandatory ), description and background color. On submitting a new record will be added to column with created timestamp as caption.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/add_record.gif" alt="Add Record GIF" style="border-radius:16px"></p>
</p>

### Edit Record

Edit the record by click on edit icon button besides record title. Update the form and click submit for commiting change or cancel to close the dialog.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/edit_record.gif" alt="Edit Record GIF" style="border-radius:16px"></p>
</p>

### Delete Record

Delete the record by click on delete icon button besides record edit icon button. This will delete the record from the column.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_record.gif" alt="Delete Record GIF" style="border-radius:16px"></p>
</p>

### Move Record

Hold and drag the record from it's body or record header to move it across other columns record list on the board.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/move_record.gif" alt="Move Record GIF" style="border-radius:16px"></p>
</p>

### Delete All Records

Delete all the record belonging to the column by clicking on the delete icon button besides add record icon button. It will remove entire record list from column.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_all_record.gif" alt="Delete All Record GIF" style="border-radius:16px"></p>
</p>

### Clear Board

Click on the delete icon button from the toolbar to clear entire board. It will delete all the columns and records from the board.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/clear_board.gif" alt="Clear Board GIF" style="border-radius:16px"></p>
</p>

### Change Language

You can change language of the application by clicking on the globe icon button in the toolbar. Select suitable language from the menu and the application locale will be change to selected language.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/change_language.gif" alt="Change Language GIF" style="border-radius:16px"></p>
</p>

### Toggle Dark Mode

You can toggle between the dark mode by clicking on the icon button from the toolbar.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/toggle_dark_mode.gif" alt="Toggle Dark Mode GIF" style="border-radius:16px"></p>
</p>

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
- 日本人

## Offline Usage

The application is registered with service workers and behaves as a progressive web application ([PWA](https://en.wikipedia.org/wiki/Progressive_web_application)). For offline usage you can select the **Add To Home** option, while accessing application in browser, to install the application locally to your mobile devices.

## Development

The application is scaffolded using create-react-app ([CRA](https://create-react-app.dev/docs/getting-started/)) with [Typescript](https://www.typescriptlang.org/) templating. You can clone the [Personal Kanban](https://github.com/nishantpainter/personal-kanban) repository for custom development.

## Privacy

The application makes use of local storage for persisting your work columns & records and does not store any personal kanban data on any sort of server. The application uses Google analytics to get an overview of the application usage.

## Other References

- [What is Agile Software Development](https://en.wikipedia.org/wiki/Agile_software_development)
- [What is Kanban](https://www.atlassian.com/agile/kanban)
- [What is Kanban Board](https://en.wikipedia.org/wiki/Kanban_board#:~:text=A%20Kanban%20board%20is%20one,each%20stage%20of%20the%20process.)
- [Kanban vs Scrum](https://www.atlassian.com/agile/kanban/kanban-vs-scrum)
