# Tabletop Robot App

## Overview

Tabletop Robot App is a React-based web application that simulates a toy robot moving on a 5x5 unit square tabletop. It is designed to demonstrate the use of React state and props, handling user interactions, and implementing basic logic in a web application.

## Features

- **Place Command**: Position the robot at a specific spot on the table and choose its direction.
- **Move Command**: Move the robot one unit forward in the direction it's currently facing.
- **Left and Right Commands**: Rotate the robot 90 degrees to the left or right without changing its position.
- **Report Command**: Display the current position and facing direction of the robot.
- **Boundary Checks**: Prevent the robot from moving off the edges of the table.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone [URL of your repository]
   ```
2. Navigate to the project directory:
   ```
   cd tabletop-robot-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the application:
   ```
   npm start
   ```

## Usage

After launching the app, use the provided buttons on the screen to interact with the robot:

- Click "PLACE" to set the robot's initial position and direction.
- Use "MOVE", "LEFT", and "RIGHT" to control the robot.
- Click "REPORT" to see the current position and direction of the robot.

## Contributing

Contributions to improve Tabletop Robot App are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

[MIT License](LICENSE.txt)
