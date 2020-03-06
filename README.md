# weather

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Goal. Create the small app which allows:
fetch data using API of https://openweathermap.org/forecast5 fd4fbed251513a7146e1342278f59ccc;
present data in the visual table;
make functionality to choose the columns user wants to see.

Technologies
Vue JS ;
html/css(vanilla, LESS, SCSS) for semantic markup.

Tasks
fetch data from weather service for the given city and save it in state or variable;
show the name of the city, its latitude and longitude, weather data in table;
add multiple select and dynamically add/remove columns from table;
add text field with city name and update the table if the city is changed;
if value is empty, show error or disable button;
if request is incorrect (because of city name), show error;
(last but not least) semantic markup and custom styles.

