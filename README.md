# РоботыВперед

## autor: burikAV

Landing Page is created for the event - the annual robotics competition "Robots Forward",
held in Slantsy, Leningrad region.
While the page is at the filling stage (materials are used from competitions that took place in 2018)
and adjusting some modules. In the future, the page will be used for competitions that will be held in 2019
and there is time to test new ideas.

The project is running. Our domain [роботывперед.рф](https://xn--90acgda4cbjegs2i.xn--p1ai/)
- - - -

* Plans to add
  * registration form
  * survey form
  * additional page for tables - participants of the competition

## Проект

* src
  * html
    * template - шаблоны для вставки
  * img - картинки и прочее изображения
  * js - скрипты
    * lib
  * service - файлы для работы сайта
    * info - документация по соревнованиям .pdf
  * style - стили .scss
    * base
    * components
    * layout
    * pages
    * utils
    * vendors
    * main.scss
  * webfonts - шрифты
* dist
* .gitignore
* gulpfile.js
* package.json
* README.md
* .htaccess - для копирования в папку dist/service при публикации

## фреймворки и библиотеки (vendors for scss & lib for js)

* jQuery 3.4.1
* fontawesome 5.13.0
* WOW
  * animate
* select2
* bootstrap 4.4.1
  * popper
