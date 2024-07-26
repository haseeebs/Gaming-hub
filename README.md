# Gaming Hub

Gaming Hub is a web application designed to provide users with information about various games, including their genres, platforms, ratings, and more. The application is built using modern web technologies and libraries to ensure a smooth and responsive user experience.

## Features

- **Game Listings**: Browse through a comprehensive list of games with detailed information.
- **Genre Filtering**: Filter games based on their genres.
- **Platform Filtering**: Filter games based on the platforms they are available on.
- **Search Functionality**: Search for games using keywords.
- **Dark Mode**: Toggle between light and dark themes.

## Technologies Used

### Languages

- **TypeScript**: Provides static typing to JavaScript, enhancing code quality and maintainability.

### Libraries and Frameworks

- **React**: A JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library for React.
- **React Router**: For handling routing in the application.
- **React Query**: For fetching, caching, and updating data in React applications.
- **Zustand**: A small, fast, and scalable bearbones state-management solution.

### APIs and Data Fetching

- **Custom API Client**: A custom API client built to interact with the backend services.
- **Rawg.io API**: Used for fetching game data.

## Project Structure

- **src/components**: Contains all the React components used in the application.
- **src/hooks**: Custom hooks for data fetching and other functionalities.
- **src/entities**: TypeScript interfaces for various entities like Game, Genre, Platform, etc.
- **src/services**: Contains the API client for making HTTP requests.
- **src/store**: Zustand store for state management.
- **src/pages**: Different pages of the application.
- **src/data**: Static data used in the application.
- **src/theme.ts**: Custom theme configuration for Chakra UI.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/haseeebs/Gaming-hub.git
   cd gaming-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.