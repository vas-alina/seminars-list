

Это минимальное React-приложение, созданное с использованием Vite, React и других современных инструментов. Проект также включает [json-server](https://github.com/typicode/json-server) для запуска локального API-сервера с данными о семинарах.

## Функциональность

- **React** для создания пользовательского интерфейса.
- **Vite** для быстрого старта разработки и сборки приложения.
- **react-hook-form** для управления формами.
- **react-icons** для использования иконок.
- **json-server** для эмуляции REST API с использованием файла `seminars.json`.

## Требования

- [Node.js](https://nodejs.org/) (рекомендуется версия 14 и выше)
- npm (устанавливается вместе с Node.js)

## Установка

1. **Клонируйте репозиторий:**

```bash
   git clone https://github.com/vas-alina/seminars-list.git

Установите зависимости:

```bash
   npm install

Скрипты
В package.json определены следующие основные команды:

Запуск dev-сервера:
Запускает Vite в режиме разработки.

```bash
npm run dev

Сборка проекта:
Собирает приложение в оптимизированном виде для продакшн-среды.

```bash
npm run build

Просмотр сборки:
Предоставляет возможность предварительного просмотра собранного приложения.

```bash
npm run preview

Запуск JSON-сервера:
Запускает json-server, который следит за изменениями в файле seminars.json на порту 3000.

```bash
npm run start-server

Линтинг:
Запускает ESLint для проверки качества кода.

```bash
npm run lint

Структура проекта
src/ — исходный код React-приложения.
seminars.json — файл с данными для JSON-сервера.

Разработка и тестирование
Запустите dev-сервер:

```bash
npm run dev

Приложение будет доступно по адресу http://localhost:3000 (или по адресу, указанному в консоли).

Запустите JSON-сервер:
В отдельном терминале выполните команду:

```bash
npm run start-server
Это позволит вам эмулировать REST API для работы с данными семинаров.

Сборка для продакшна
Для создания оптимизированной сборки приложения выполните:

```bash
npm run build
После завершения сборки, чтобы посмотреть, как будет выглядеть ваше приложение в продакшн-среде, запустите:

```bash
npm run preview

Зависимости
Основные зависимости проекта:

react: ^19.0.0
react-dom: ^19.0.0
react-hook-form: ^7.54.2
react-icons: ^5.4.0
Dev Dependencies
Инструменты для разработки:

vite: ^6.1.0
@vitejs/plugin-react: ^4.3.4
eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh
json-server: ^1.0.0-beta.3
@eslint/js, @types/react, @types/react-dom, и др.
Лицензия
Данный проект является приватным.

