<p align="center">
  <a href="https://nishantpainter.github.io/personal-kanban/" rel="noopener" target="_blank"><img width="756" src="https://nishantpainter.github.io/personal-kanban/readme_logo_fr.png" alt="Personal Kanban logo"></a></p>
</p>

#

<p align="center">
  Un tableau Kanban virtuel hors ligne pour vos projets personnels et vos flux de travail.
</p>

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/description.gif" alt="Description GIF" style="border-radius:16px"></p>
</p>

[![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://nishantpainter.github.io/personal-kanban) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/github/license/day8/re-frame.svg)](https://github.com/nishantpainter/personal-kanban/blob/main/license.txt) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue.svg)](https://github.com/nishantpainter/personal-kanban/commits/main) [![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/nishantpainter/personal-kanban/issues)

[English](https://github.com/nishantpainter/personal-kanban/blob/main/README.md) - [Français](https://github.com/nishantpainter/personal-kanban/blob/main/README_FR.md) - [Español](https://github.com/nishantpainter/personal-kanban/blob/main/README_ES.md) - [Pусский](https://github.com/nishantpainter/personal-kanban/blob/main/README_RU.md) - [Deutsch](https://github.com/nishantpainter/personal-kanban/blob/main/README_DE.md) - [हिंदी](https://github.com/nishantpainter/personal-kanban/blob/main/README_IN.md) - [中文](https://github.com/nishantpainter/personal-kanban/blob/main/README_CN.md) - [日本語](https://github.com/nishantpainter/personal-kanban/blob/main/README_JP.md)

Personal Kanban est une application ou un outil hors ligne qui implémente le kanban pour gérer le travail au niveau personnel. Les éléments de travail peuvent être représentés sous forme d'enregistrements et de colonnes pour décrire chaque étape de votre processus de travail. Les colonnes peuvent être aussi simples que «todo», «in-progress» et «done», ou elles peuvent être complexes en fonction de votre flux.

C'est un outil pour visualiser et optimiser votre flux de travail. Les cartes physiques sont populaires parmi quelques-uns, tandis que les cartes virtuelles comme Personal Kanban jouent un rôle essentiel dans le développement de logiciels agiles compte tenu de leur accessibilité, de leur simplicité et de leur affichage élégant. Indépendamment du fait qu'un tableau soit physique ou virtuel, il doit représenter le travail visuellement tout en identifiant clairement le blocage et les autres dépendances. Chacune de ces fonctionnalités est offerte de manière transparente par Personal Kanban.

Planifiez votre travail avec flexibilité, identifiez et résolvez les goulots d'étranglement et visualisez visuellement l'intégralité de votre travail.

# Table des matières

- **[Introduction](#introduction)**
- **[Traits](#traits)**
- **[Comment utiliser](#comment-utiliser)**
  - **[Ajouter une colonne](#ajouter-une-colonne)**
  - **[Modifier la colonne](#Modifier-la-colonne)**
  - **[Supprimer la colonne](#Supprimer-la-colonne)**
  - **[Déplacer la colonne](#Déplacer-la-colonne)**
  - **[Ajouter un enregistrement](#Ajouter-un-enregistrement)**
  - **[Modifier l'enregistrement](#Modifier-l'enregistrement)**
  - **[Supprimer l'enregistrement](#Supprimer-l'enregistrement)**
  - **[Déplacer l'enregistrement](#Déplacer-l'enregistrement)**
  - **[Supprimer tous les enregistrements](#Supprimer-tous-les-enregistrements)**
  - **[Conseil clair](#Conseil-clair)**
  - **[Changer de langue](#Changer-de-langue)**
  - **[Basculer en mode sombre](#Basculer-en-mode-sombre)**
- **[Mode sombre](#Mode-sombre)**
- **[Localisation](#Localisation)**
- **[Utilisation hors ligne](#Utilisation-hors-ligne)**
- **[Développement](#développement)**
- **[Intimité](#Intimité)**
- **[Other References](#Autres-références)**

## Introduction

C'est un outil de gestion de projet agile qui vous aide à visualiser votre travail, à limiter votre travail en cours (wip) et à élaborer et optimiser votre flux de travail pour obtenir le maximum de rendement. Pour ce faire, il utilise des colonnes et des enregistrements. Le kanban personnel offre des indices visuels, des colonnes, des limites d'effacement, un point de départ et un point final pour vous préparer au succès.

## Traits

Voici quelques-unes des choses que vous pouvez faire avec Personal Kanban:

- Ajouter, modifier, supprimer des colonnes
- Déplacer les colonnes
- Ajouter, modifier, supprimer des enregistrements
- Déplacer les enregistrements
- Restreindre les limites WIP pour les colonnes
- Gérer les couleurs d'arrière-plan des colonnes et des enregistrements
- Conseil clair
- Mode sombre
- Assistance à la localisation
- Stockage local hors ligne

## Comment utiliser

Vous pouvez accéder à l'application en visitant [Site Internet](https://nishantpainter.github.io/personal-kanban/). L'application dispose d'un ensemble de fonctionnalités comme suit :

### Ajouter une colonne

Ajoutez une nouvelle colonne en cliquant sur le bouton + icône de la barre d'outils. Entrez les détails de la colonne, y compris le titre (obligatoire), la description, la couleur d'arrière-plan et la limite d'effacement.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/add_column.gif" alt="Add Column GIF" style="border-radius:16px"></p>
</p>

### Modifier la colonne

Modifiez la colonne en cliquant sur le bouton d'icône d'édition à côté du titre de la colonne. Mettez à jour le formulaire et cliquez sur Soumettre pour valider la modification ou sur Annuler pour fermer la boîte de dialogue.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/edit_column.gif" alt="Edit Column GIF" style="border-radius:16px"></p>
</p>

### Supprimer la colonne

Supprimez la colonne en cliquant sur le bouton d'icône de suppression à côté du bouton d'icône d'édition. Cela supprimera la colonne ainsi que tous les enregistrements de la colonne.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_column.gif" alt="Delete Column GIF" style="border-radius:16px"></p>
</p>

### Déplacer la colonne

Maintenez et faites glisser la colonne à partir de son corps ou de son en-tête de colonne pour la déplacer dans d'autres colonnes du tableau.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/move_column.gif" alt="Move Column GIF" style="border-radius:16px"></p>
</p>

### Ajouter un enregistrement

Ajoutez un nouvel enregistrement en cliquant sur le bouton Ajouter une icône sous le titre / la description de la colonne. Entrez les détails du titre de l'enregistrement (obligatoire), la description et la couleur de fond. Lors de la soumission, un nouvel enregistrement sera ajouté à la colonne avec l'horodatage créé comme légende.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/add_record.gif" alt="Add Record GIF" style="border-radius:16px"></p>
</p>

### Modifier l'enregistrement

Modifiez l'enregistrement en cliquant sur le bouton d'icône d'édition à côté du titre de l'enregistrement. Mettez à jour le formulaire et cliquez sur Soumettre pour valider la modification ou sur Annuler pour fermer la boîte de dialogue.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/edit_record.gif" alt="Edit Record GIF" style="border-radius:16px"></p>
</p>

### Supprimer l'enregistrement

Supprimez l'enregistrement en cliquant sur le bouton d'icône de suppression à côté du bouton d'icône d'édition d'enregistrement. Cela supprimera l'enregistrement de la colonne.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_record.gif" alt="Delete Record GIF" style="border-radius:16px"></p>
</p>

### Déplacer l'enregistrement

Maintenez et faites glisser l'enregistrement de son corps ou de son en-tête d'enregistrement pour le déplacer à travers la liste d'enregistrements d'autres colonnes sur le tableau.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/move_record.gif" alt="Move Record GIF" style="border-radius:16px"></p>
</p>

### Supprimer tous les enregistrements

Supprimez tous les enregistrements appartenant à la colonne en cliquant sur le bouton d'icône de suppression en plus du bouton d'icône d'ajout d'enregistrement. Cela supprimera toute la liste des enregistrements de la colonne.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/delete_all_record.gif" alt="Delete All Record GIF" style="border-radius:16px"></p>
</p>

### Conseil clair

Cliquez sur le bouton d'icône de suppression de la barre d'outils pour effacer tout le tableau. Il supprimera toutes les colonnes et tous les enregistrements du tableau.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/clear_board.gif" alt="Clear Board GIF" style="border-radius:16px"></p>
</p>

### Changer de langue

Vous pouvez changer la langue de l'application en cliquant sur le bouton icône globe dans la barre d'outils. Sélectionnez la langue appropriée dans le menu et les paramètres régionaux de l'application seront remplacés par la langue sélectionnée.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/change_language.gif" alt="Change Language GIF" style="border-radius:16px"></p>
</p>

### Basculer en mode sombre

Vous pouvez basculer entre le mode sombre en cliquant sur le bouton icône de la barre d'outils.

<p align="center">
  <img width="650" src="https://nishantpainter.github.io/personal-kanban/toggle_dark_mode.gif" alt="Toggle Dark Mode GIF" style="border-radius:16px"></p>
</p>

## Mode sombre

Le mode sombre vous aide à transformer rapidement l'écran en sombre (lors de l'utilisation pendant la nuit). La barre d'outils vous propose un bouton icône qui sert d'interrupteur marche / arrêt pour le mode sombre.

## Localisation

Personal Kanban offre une assistance locale pour la langue, notamment:

- English
- Français
- Español
- Pусский
- Deutsch
- हिंदी
- 中文
- 日本語

## Utilisation hors ligne

L'application est enregistrée auprès des techniciens de service et se comporte comme une application Web progressive ([PWA](https://en.wikipedia.org/wiki/Progressive_web_application)). Pour une utilisation hors ligne, vous pouvez sélectionner le **Ajouter à la maison** option, lors de l'accès à l'application dans le navigateur, pour installer l'application localement sur vos appareils mobiles.

## Développement

L'application est échafaudée à l'aide de create-react-app ([CRA](https://create-react-app.dev/docs/getting-started/)) avec [Typescript](https://www.typescriptlang.org/) modèle. Vous pouvez cloner le [Kanban personnel](https://github.com/nishantpainter/personal-kanban) référentiel pour le développement personnalisé.

Pour exécuter l'application localement sur votre machine, vous pouvez suivre les étapes ci-dessous:

- Utilisation de npm

```
1: git clone https://github.com/nishantpainter/personal-kanban.git
2: cd personal-kanban
3: npm install
4: npm run build
5: sudo npm install -g serve
6: serve -s build
```

- Utilisation de yarn

```
1: git clone https://github.com/nishantpainter/personal-kanban.git
2: cd personal-kanban
3: yarn install
4: yarn build
5: sudo npm install -g serve
6: serve -s build
```

## Intimité

L'application utilise le stockage local pour conserver vos colonnes de travail et vos enregistrements et ne stocke aucune donnée Kanban personnelle sur aucun type de serveur. L'application utilise Google Analytics pour obtenir une vue d'ensemble de l'utilisation de l'application.

## Autres références

- [Qu'est-ce que le développement logiciel agile](https://en.wikipedia.org/wiki/Agile_software_development)
- [Qu'est-ce que Kanban](https://www.atlassian.com/agile/kanban)
- [Qu'est-ce que le tableau Kanban](https://en.wikipedia.org/wiki/Kanban_board#:~:text=A%20Kanban%20board%20is%20one,each%20stage%20of%20the%20process.)
- [Kanban vs Scrum](https://www.atlassian.com/agile/kanban/kanban-vs-scrum)
