# Project13

Версия проекта: v.0.0.3

## Проектная работа Yandex Praktikum №13

### В данной работе создан REST API для проекта Mesto и связан с базой данных.

__Используемые технологии:__ JS, NodeJS, Express, Mongoose, Postman, GIT.

## Локальный запуск
1. Склонировать репозиторий
2. Доставить отсутствющие модули npm
3. Запустить локальный сервер

## Реализованные запросы
1. запрос на GET (http://localhost:3000/users) возвращает всех пользователей из базы;
2. запрос GET (http://localhost:3000/users/:userId) возвращает конкретного пользователя;
3. запрос POST (http://localhost:3000/users) создаёт пользователя;
4. запрос GET (http://localhost:3000/cards) возвращает все карточки всех пользователей;
5. запрос POST (http://localhost:3000/cards) создаёт карточку;
6. запрос PATCH (http://localhost:3000/users/me) — обновляет профиль;
7. запрос PATCH (http://localhost:3000/users/me/avatar) — обновляет аватар;
8. запрос PUT (http://localhost:3000/cards/:cardId/likes) — поставить лайк карточке;
9. запрос DELETE (http://localhost:3000/cards/:cardId/likes) — убрать лайк с карточки;
