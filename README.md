
# Design System Monorepo

This project explores different approaches to developing a **design system from scratch**. It is structured as a **monorepository** and consists of several custom packages, each responsible for different layers of the system. The repository is also equipped with tools for testing, documentation, and accessibility.

---

## 📦 Monorepo Structure

```
packages/
  ├── react/       # All React UI components
  ├── foundation/  # Basic shared utilities and foundational components
  └── scss/        # SCSS variables, mixins, and shared styles

playgrounds/
  └── react/       # Sample app for testing components in real scenarios
```

---

## 🔧 Features

- **Custom Component Library**: Built with React, following best practices for scalability and reusability.
- **Design Tokens & Styling**: Centralized SCSS package to manage variables, themes, and styles across components.
- **Foundation Layer**: Core utilities and simple building blocks used by the main components.
- **Storybook Integration**: Visual documentation and testing of UI components.
- **Unit Testing**: Written with [Jest](https://jestjs.io/) for test coverage and reliability.
- **Accessibility Support**: Includes keyboard navigation support for components like `<Select />`.

---

## 📖 Getting Started

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Build Packages

```bash
npm run build
```

### Run Storybook

```bash
npm run storybook
```

### Run Tests

```bash
npm test
```

---

## 🧪 Technologies Used

- **React**
- **SCSS**
- **Jest**
- **Storybook**
- **TypeScript** (if applicable)
- **Lerna**

---

## 🧭 Goals

- Explore scalable architecture for building and maintaining a design system.
- Learn how to structure monorepos efficiently for design systems.
- Improve accessibility and usability of UI components.
- Automate documentation and ensure consistent testing.


