# John App

![demo](https://github.com/IgorMokhov/valantis-app/assets/115712538/27e32cbd-359c-46f2-aa41-41e7eb2534f1)
![demo](https://github.com/IgorMokhov/valantis-app/assets/115712538/1f8208fa-5a0f-4850-ae68-de747a37661f)
[Deployed Project](https://john-app.vercel.app/login)

## Introduction

John App - React Single Page Application.

Test task for the position of "Junior Frontend developer" (MacBuildServer)

## Test Task Description

Тестовое задание на позицию Jun Front Developer

Написать приложение из 3х страниц:

1. Страница авторизации в цветах и стиле основной страницы

- В форме авторизации email и пароль
- Кнопка sign in
- Хранение токенов организовано в Redux
- Обработка ошибок приветствуется

2. Страница регистрации в цветах и стиле основной страницы

- В форме авторизации email и пароль
- Кнопка sign in
- Обработка ошибок приветствуется

3. Основная страница

- Собрана по первому фрейму (home) макета: [Figma design](https://www.figma.com/file/u96UjK2Kzo2bk0PhVdL5xr/John-%2B?type=design&node-id=0-1&mode=design&t=9HKcEn7zMmKpkkCR-0)
- Адаптивность приветствуется, но не обязательна
- Рендер организованный при использовании Next.js приветствуется

4. Бэк:

- Сервер на node.js, для авторизации
- Использование fakeapi не воспрещается

5. Тесты:

- Приветствуются, но необязательны

Результат:

- Ссылка на паблик репозиторий на GitHub
- Инструкция в ReadME в репо по запуску локальной версии
- Будет плюсом контейнеризация в докер

## Features

### Elements

- Registration and authorization are carried out via email/password
- Firebase is used as the backend for authentication
- All data entered into the form are checked for validity, and an error message is displayed for invalid data
- The token obtained from Firebase Authentication is stored in Redux
- The token can be removed from Redux by clicking on the logout button
- HomePage pages is only available to registered users

### Security
- FIREBASE_API_KEYS are stored in a separate .env file.

### Routing
- HomePage
- LoginPage
- RegisterPage
- NotFoundPage

### State Management

- Redux Toolkit
- Implemented through Slices

### Layout

- Responsive design up to 320px.

## Technologies

- [**TypeScript**](https://www.typescriptlang.org/): A superset of JavaScript that adds static types to the language.
- [**React**](https://reactjs.org/): A JavaScript library for building user interfaces.
- [**React Router**](https://reactrouter.com/): Enables navigation and routing in the React application.
- [**Redux Toolkit**](https://redux-toolkit.js.org/): Facilitates state management in React applications.
- [**Firebase**](https://firebase.google.com/): Firebase, a platform developed by Google, specializes in authentication and offers a suite of services for mobile and web applications
- [**Vite**](https://vitejs.dev/): A modern frontend build tool that significantly improves the development experience.

## Getting Started

To install and use the project, follow these steps:

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run the following command to install dependencies:

```sh
  npm install
```

<br/>

### Usage

To start the development server, use the following command:

```sh
  npm run dev
```

Visit the provided local URL in your browser to explore the "My Books" application.

<br/>

### Build

For a production build, run the following command:

```sh
  npm run build
```

<br/>

## Author

Igor Mokhov — Frontend Developer<br/>
[LinkedIn](https://www.linkedin.com/in/igor-mokhov/) <br/>
igormokhovid@gmail.com
