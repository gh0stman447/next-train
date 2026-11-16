# Next Lab

Учебный проект для последовательного изучения современного Next.js 16 и App Router.

## Маршрут обучения

| Этап | Что изучаем | Практический результат |
| --- | --- | --- |
| 1. Основа | структура `app`, страницы, layouts, `Link`, стили, TypeScript | личный мини-сайт с несколькими маршрутами |
| 2. React + границы | Server / Client Components, props, state, composition | интерактивные элементы без лишнего клиентского JS |
| 3. Данные | `async` Server Components, `fetch`, loading/error/not-found | каталог с данными и состояниями загрузки |
| 4. Маршрутизация | dynamic routes, search params, route groups, parallel routes | страницы товара, фильтры и dashboard |
| 5. Мутации | forms, Server Actions, валидация, optimistic UI | CRUD-задачник |
| 6. Backend-for-frontend | Route Handlers, cookies, auth-потоки, `proxy.ts` | защищённый API и личный кабинет |
| 7. Производительность | `next/image`, fonts, metadata, streaming, кэширование и revalidation | быстрый production-ready интерфейс |
| 8. Продвинутый Next 16 | Cache Components, `use cache`, `cacheLife`, cache tags, PPR | смешанная статическая/динамическая страница |
| 9. Качество и релиз | тесты, accessibility, env, observability, deployment | финальный проект в production |

Работаем итерациями: один концепт → небольшой пример → твоё изменение → разбор.

## Урок 1 — Server и Client Components

`app/page.tsx` — Server Component по умолчанию. Он может безопасно работать с серверными ресурсами и не добавляет свой код в browser bundle.

`components/progress-counter.tsx` помечен директивой `"use client"`, потому что использует `useState` и обработчик `onClick`. Граница выбрана как можно ниже в дереве компонентов: интерактивен только счётчик, а не вся страница.

Задание: добавь в счётчик кнопку сброса. Затем запусти проект и проверь результат.

## Запуск

```bash
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).
