# Bookstore App - React Native Frontend

This repository contains the code for the frontend of a Bookstore App developed using React Native. The app allows users to browse and view book information fetched from a REST API. The frontend implements various features and follows the provided UI image.

## Features

The Bookstore App frontend includes the following features:

- **Card Type List**: Renders book data in a card format using the Flatlist component.
- **Book Card**: Each card displays the book's title, discount rate, cover image, and price.
- **Infinite Scroll**: Loads the next set of data when the user reaches 80% of the floor, providing seamless scrolling through the book list.
- **Refresh Control**: Allows users to trigger a refresh by pulling down on the screen, fetching the latest book data.
- **Image Display**: The book cover images have a fixed aspect ratio and adjust to fit various image sizes.
- **Responsiveness**: The UI is designed to be responsive, adapting to a width range of 350 - 700px.

## Screenshots

Here are the screenshots of the Book List and Book Details pages:

### Book List Page
![Book List Page](src/assets/images/booklist_screenshot.png)

### Book Details Page
![Book Details Page](src/assets/images/bookdetails_screenshot.png)

## Usage

To run the Bookstore App frontend locally, follow these steps:

1. Clone the repository: `git clone [repository-url]`
2. Install dependencies: `yarn install`
3. Start the development server: `yarn start`
4. Open the app on your emulator or device using a suitable development environment.

## Folder Structure

The repository follows a common React Native project structure:

- **src**: Contains the source code of the app.
  - **components**: Holds reusable components used in the app.
  - **screens**: Contains individual screens of the app, including the BookList and BookDetails screens.
  - **routes.js**: Defines the app's navigation routes.
  - **apis**: Provides functions for fetching book data from the REST API.
  - **i18n**: Handles internationalization and localization.
  - **assets**: Includes any static assets such as images used in the app.
- **App.tsx**: Entry point of the app.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Lists the project dependencies and scripts.

## Contributing

Contributions to the Bookstore App frontend are welcome! 

## License

The Bookstore App frontend is released under the [MIT License](LICENSE).