# React TanStack Widget

A React widget component library that integrates TanStack Router, TanStack Query, and Tailwind CSS for building embeddable widgets.

## Features

- Built with React, TypeScript, TanStack Router, and TanStack Query
- Styled with Tailwind CSS for modern, responsive design
- Easily embeddable in any React application
- Customizable theming
- Built-in routing with TanStack Router
- Data fetching with TanStack Query
- Fully typed API with TypeScript

## Installation

```bash
npm install react-tanstack-widget
```

or

```bash
yarn add react-tanstack-widget
```

### Requirements

**Important**: This widget uses Tailwind CSS for styling. To use this widget in your application, you need to:

1. Install Tailwind CSS in your host application:

```bash
npm install tailwindcss
```

2. Configure Tailwind in your project:

```bash
npx tailwindcss init
```

3. Make sure your Tailwind configuration includes the widget's styles:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tanstack-widget/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Usage

### Basic Usage

```jsx
import React from "react";
import { Widget } from "react-tanstack-widget";

const App = () => {
  return (
    <div className="app">
      <h1>My Application</h1>

      {/* Basic widget implementation */}
      <Widget instanceId="my-widget-1" />
    </div>
  );
};
```

### Custom Theme

You can customize the appearance of the widget by providing a theme object:

```jsx
import React from "react";
import { Widget } from "react-tanstack-widget";

const App = () => {
  return (
    <div className="app">
      <h1>My Application</h1>

      {/* Widget with custom theme */}
      <Widget
        instanceId="my-widget-2"
        theme={{
          primaryColor: "#ff6b6b",
          secondaryColor: "#4ecdc4",
          fontFamily: "Roboto, sans-serif",
        }}
      />
    </div>
  );
};
```

### With Initial Data

You can pass initial data to the widget:

```jsx
import React from "react";
import { Widget } from "react-tanstack-widget";

const App = () => {
  return (
    <div className="app">
      <h1>My Application</h1>

      {/* Widget with initial data */}
      <Widget
        instanceId="my-widget-3"
        initialData={{
          customerId: "12345",
          preferences: {
            language: "en-US",
            currency: "USD",
          },
        }}
      />
    </div>
  );
};
```

## Styling with Tailwind CSS

The widget is built with Tailwind CSS utility classes. You can use the theme customization to change the primary and secondary colors, as well as the font family. The widget will automatically apply these styles to its components.

```jsx
<Widget
  instanceId="styled-widget"
  theme={{
    primaryColor: "#8b5cf6", // Purple
    secondaryColor: "#06b6d4", // Cyan
    fontFamily: "Poppins, sans-serif",
  }}
/>
```

## API Reference

### Widget Props

| Prop                 | Type   | Required | Description                               |
| -------------------- | ------ | -------- | ----------------------------------------- |
| instanceId           | string | Yes      | Unique identifier for the widget instance |
| initialData          | object | No       | Initial data to pass to the widget        |
| theme                | object | No       | Custom theme settings                     |
| theme.primaryColor   | string | No       | Primary color for the widget              |
| theme.secondaryColor | string | No       | Secondary color for the widget            |
| theme.fontFamily     | string | No       | Font family for the widget text           |

## Development

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build the library: `npm run build`

## Publishing

To publish a new version to npm:

1. Update the version in package.json
2. Build the library: `npm run build`
3. Publish to npm: `npm publish`

## License

MIT
