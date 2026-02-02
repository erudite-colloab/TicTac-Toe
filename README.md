# Tic Tac Toe (JavaScript)

A browser-based Tic Tac Toe game built with **vanilla JavaScript**, using **factory functions** and the **module pattern** to maintain clean separation of concerns and minimal global state.

This project was built step-by-step, starting with console-based game logic before integrating DOM interaction and UI enhancements.

---

## 🎯 Project Objectives

- Practice JavaScript **factory functions** and **IIFE modules**
- Separate concerns between:
  - Game logic
  - Data (gameboard)
  - UI / DOM manipulation
- Avoid unnecessary global variables
- Build scalable and readable code

---

## 🧠 Architecture Overview

The project is divided into four main components:

### 1. Gameboard (Module)
- Stores the game board as an array
- Controls placement of marks
- Can reset itself

### 2. Player (Factory)
- Creates player objects
- Stores player name and marker (`X` or `O`)

### 3. GameController (Module)
- Controls the flow of the game
- Switches turns
- Checks for wins and ties
- Handles restarting the game

### 4. DisplayController (Module)
- Handles all DOM manipulation
- Renders the board
- Displays game status
- Handles user interaction (clicks, restart)

---

## 🕹️ How to Play

1. Enter player names (optional)
2. Click **Start / Restart**
3. Players take turns clicking squares
4. The game announces:
   - Winner 🎉
   - Tie 🤝
5. Click **Start / Restart** to play again

---

## 🛠️ Technologies Used

- HTML
- CSS (Grid)
- JavaScript (ES6)

No external libraries or frameworks were used.

---

## 📚 Concepts Demonstrated

- Module Pattern (IIFE)
- Factory Functions
- Encapsulation
- Event Handling
- DOM Manipulation
- Game State Management

---

## 🚀 Possible Improvements

- Highlight winning combination
- Add AI opponent
- Add score tracking
- Improve mobile responsiveness

---

## 👨‍💻 Author

**Baah-Asamoah Eugene**  
 
