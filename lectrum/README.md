# Онлайн-урок по React

Для запуска проекта выполни следующие шаги:

*   `git clone git@github.com:Lectrum/react-online-lesson.git`
*   `cd react-online-lesson`
*   `yarn` или `npm i`
*   `yarn start` или `npm start`

#### Чтобы задеплоить приложение на github pages:

*   Запуши репозиторий с приложением на github
*   В файле `package.json`, в скрипте `build:prod-github` — укажи значение переменной окружения `REPOSITORY_NAME` в виде имени своего репозитория на github
*   Затем — `yarn deploy` или `npm run deploy`

###### Заметка: после деплоя, приложение будет доступно по адресу:

> `https://имя-твоего-пользователя-гитхаб.github.io/имя-твоего-репозитория-с-приложением`

#### Чтобы сбилдить приложение без github pages:

*   `yarn build:prod` или `npm run build:prod`

### Contacts 
hello@lectrum.io
https://www.youtube.com/watch?v=rj4yS9vS8T4
