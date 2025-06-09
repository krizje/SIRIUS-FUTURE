# sirius-future-test

Тестовый проект на React + TypeScript, собранный с помощью Vite.

## 🛠️ Технологии

- React 19
- TypeScript
- Vite
- Redux Toolkit/Redux query
- React Router 
- React Hook Form
- Zod
- html2canvas + jsPDF (для генерации PDF)
- Sass (SCSS)
- ESLint, Prettier, Stylelint
- Husky + lint-staged

## 📦 Установка

```bash
pnpm install
```

## 🚀 Скрипты

| Команда               | Описание                                     |
|-----------------------|----------------------------------------------|
| `npm run dev`         | Запуск dev-сервера Vite                      |
| `npm run build`       | Сборка проекта                               |
| `npm run preview`     | Предпросмотр production-сборки               |
| `npm run lint`        | Проверка кода ESLint                         |
| `npm run format`      | Форматирование кода Prettier                 |
| `npm run type-check`  | Проверка типов с помощью TypeScript          |

## ✅ Git-хуки

Настроены через `husky` и `lint-staged`:
- `pre-commit`: линтинг и автоформатирование файлов перед коммитом.

## 🔧 Структура проекта (пример)

```
src/
├── api/              # API запросы
├── assets            # Шрифты, иконки
├── components/       # UI-компоненты
├── hooks/            # Кастомные хуки
├── router/           # Маршруты
├── store/            # Redux
├── styles/           # Глобальные стили
├── types/            # Типы
├── utils/            # Утилиты
├── views/            # Страницы приложения
└── main.tsx          # Точка входа
```
