## Тестовое задание для участия в стажировке ИТ-старт Газпромнефть-Цифровые решения

### Команда разработки аналитических бизнес-приложений Практики бизнес и продвинутой аналитики Газпромнефть-ЦР

## Что реализовано в приложении

1. Приложение, обрабатывающее предоставленные данные по курсам валют и отрисовывающее визуализацию, представленную в [**макете**](https://www.figma.com/file/CppcOcor3NP1BfrppRgd4a/Test?node-id=0%3A1&mode=dev0)

2. Тултипы, отображающиеся при наведении на график и показывающие значение в данной точке

3. Среднее значение за период

4. Переключение курсов валют

5. Используются компоненты из библиотеки [**Consta UI Kit**](https://consta.design/libs/uikit) (Cart, ChoiceGroup, Loader, ResponsesConnectError)

6. Получение данных происходит с помощью запроса к API на сервисе [**mockAPI**](https://mockapi.io/)

7. Отображение состояния загрузки данных или ошибки при их загрузке

8. Для отрисовки графика использован компонент ReactECharts из файла [**ReactECharts.ts**](./src/components/ReactECharts)

9. В коде присутствуют комментарии по назначению отдельных его участков или целых функций

### Дополнительная информация

1. В папке [**utils**](./src/utils/) содержатся файлы со вспомогательными функциями

2. В папке [**types**](./src/types/) содержится файл с типами, которые используются в нескольких файлах

3. Project secret из сервиса mockAPI пренесён в файл [**.env**](.env). Этот файл присутствует в репозитории для простоты проверки задания. (хотя в реальном приложении его следовало бы поместить в .gitignore и скрыть из репозитория)

## Как посмотреть на работу приложения

1. Сайт развёрнут с помощью GitHub Pages по адресу:

```
http://dumbus.github.io/currency-dashboard
```

2. Развернуть приложение локально (см. далее)

## Как развернуть приложение локально

1. Скопировать репозиторий:

```
git clone https://github.com/dumbus/currency-dashboard.git
```

2. Поменять текущую папку:

```
cd currency-dashboard
```

3. Установить зависимости:

```
npm install
```

4. Запустить приложение:

```
npm run start
```

5. Открыть приложение в браузере:

```
http://localhost:{port}/currency-dashboard
```

> По умолчанию port = 3000
