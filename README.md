# Password Generator App

## Overview

The Password Generator App is a React-based tool for generating secure and customizable passwords. It allows users to create passwords with various characteristics, including length, uppercase letters, numbers, special characters, and pronounceability. The app also includes features like copying the generated password to the clipboard and a history of generated passwords.

## Tech Stack

- **Frontend**: 
  - [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling.
  - [Font Awesome](https://fontawesome.com/) - Icon library used for the clipboard icon.

- **Development Tools**:
  - [React Switch](https://github.com/markusenglund/react-switch) - A customizable switch component for toggles.
  - [React Hooks](https://reactjs.org/docs/hooks-intro.html) - For managing state and side effects.

- **Build and Package Management**:
  - [npm](https://www.npmjs.com/) - Package manager for Node.js, used for managing project dependencies.


## Features

- Generate passwords with customizable length.
- Include or exclude uppercase letters, numbers, and special characters.
- Option to create pronounceable passwords with configurable character positions.
- Copy generated passwords to clipboard with a single click.
- Stylish user interface with responsive design.

## Usage

1. **Set Password Length**: Use the number input to specify the desired password length (between 4 and 32 characters).

2. **Configure Password Options**:
   - **Include Uppercase**: Toggle to include or exclude uppercase letters.
   - **Include Numbers**: Toggle to include or exclude numbers.
   - **Include Special Characters**: Toggle to include or exclude special characters.
   - **Pronounceable Password**: Toggle to generate passwords that are easier to pronounce.

3. **Position of Extra Characters** (when `Pronounceable Password` is enabled): Choose whether to place additional characters at the start or end of the password.

4. **Generate Password**: Click the "Generate Password" button to create a new password based on your settings.

5. **Copy to Clipboard**: Click the clipboard icon to copy the generated password to your clipboard.

6. **Password History**: View a history of generated passwords (if applicable).

