# Greeting-Builder

A simple JavaScript project that creates personalized greetings using a person's first name, last name, and time of day.

## Requirements

- [Node.js](https://nodejs.org/) installed on your computer

## How to run

1. Download or clone this project to your computer.
2. Make sure the JavaScript code is saved in a file named `index.js` in the project folder. If your file has a different name, use that filename in the command below.
3. Open a terminal (such as VS Code's **Terminal > New Terminal**) in the project folder.
4. Run:

   ```bash
   node index.js
   ```

5. View the greeting messages printed in the terminal.

## Expected output

```text
Good morning, Ava Stone
Good evening, Noah Kim
Good afternoon, Mina Patel
```

## How it works

- `formatName(firstName, lastName)` joins the first and last names with a space.
- `getGreeting(timeOfDay)` returns a greeting for `"morning"`, `"afternoon"`, or `"evening"`.
- `createGreeting(firstName, lastName, timeOfDay)` combines the greeting and full name.

## Example

```javascript
console.log(createGreeting("Ava", "Stone", "morning"));
// Good morning, Ava Stone
```

**Note:** To match the expected output, return `"Good evening"` without a trailing space in `getGreeting()`.
