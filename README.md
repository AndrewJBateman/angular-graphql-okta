# :zap: Angular GraphQL Okta

* Angular with Okta used to limit access to data using login
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-graphql-okta?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-graphql-okta?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-graphql-okta?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-graphql-okta?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular GraphQL Okta](#zap-angular-graphql-okta)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:wrench: Testing](#wrench-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status, Testing & To-Do List](#clipboard-status-testing--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Angular frontend uses Okta for auth login/logout

## :camera: Screenshots

![Image](./imgs/query.png)

## :signal_strength: Technologies

* [Node.js v16](https://nodejs.org/) Javascript runtime using the [Chrome V8 engine](https://v8.dev/)
* [Angular v13](https://angular.io/) javascript framework
* [Okta Angular SDK](https://github.com/okta/okta-angular)
* [Okta CLI](https://github.com/okta/okta-cli)
* [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure.

## :floppy_disk: Setup

* `npm i` to install dependencies
* You will need to [install the Okta CLI](https://github.com/okta/okta-cli#installation). I installed it on Windows 10 Home using the [Chocolatey package manager](https://chocolatey.org/)
* You will need an Okta developer account then use `okta login` to integrate it with the Okta CLI.
* In Okta apps, create a client app then add options: Type of Application: SPA, Redirect URI: `http://localhost:4200/login/callback`, Logout Redirect URI: `http://localhost:4200` (You must add these redirect URIs or login will not work)
* Add issuer and Client-ID to `app.module.ts`

* `ng serve` runs frontend on `http://localhost:4200` with auto-restart after changes

## :wrench: Testing

* tba

## :computer: Code Examples

* Backend: tba

```javascript

```

## :cool: Features

* tba

## :clipboard: Status, Testing & To-Do List

* Status: Working Okta auth.
* To-Do: Add data API

## :clap: Inspiration

* tba

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
