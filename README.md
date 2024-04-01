# Color Palette Builder

The color palette builder application written in React that allows you to
construct a palette by selecting a color, giving it a name and then hitting
save. Once a color is created a card will appear with the color's name.

- An unlimited number of colors can be added
- Colors can be updated from the card
- Colors can be rated after they are added between 0-5 stars
- Colors can be removed from the palette
- Text on color cards should have enough contrast with the card background color

## The task

Review the `demo.mov` video to get an idea of the expected behavior of the
application. Install the dependencies, start the server, and get the application
behavior as close to the video as possible.

If you have time, here are some bonus features you can work on:

- Add form validation that disables the submit button when the form is empty
- Add a reset button for the `CardSelector` with different styling from the
  submit button
- Write some tests
- Add sorting of colors by brightness
- Add ability to save multiple color palettes
- Save color palettes locally (persist palette between browser refreshes)
- Add utilities to adjust entire color palette
- Build a custom color picker
- Upload an image and build a color palette from it

### Known bugs

The app is currently not finished. Review the `demo.mov`, play with the
application and figure out what needs to be done to complete it. Some of the
behavior is currently not working as expected! Here are some of the known issues
that need to be resolved:

- The text color on cards doesn't have enough contrast (try adding light color,
  the text should be black!)
- The color cards are vertical instead of horizontal like the demo

If you have time, feel free to refactor any code that you feel could be written
better.

## Quick Start

### Starting the application

This application is written in React with Vite. To get started

```bash
npm install
npm run dev
```

### Testing

To write tests you can start the test runner in watch mode. This will re-run
tests when you make changes

```bash
npm run test --watch
```
