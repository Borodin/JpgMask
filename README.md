JpgMask
=======
Позволяет использовать JPG файлы с в качестве маски изображения.
[Демонстрация работы](http://borodinart.ru/projects/JpgMask/demo/index.html)
![demo](https://raw.github.com/Borodin/JpgMask/master/demo/demo.png)


### Использование ###
Скачайте файл [jpgmask.js](https://raw.github.com/Borodin/JpgMask/master/lib/jpgmask.js) и вставте его в html страницу.

```html
<script src="jpgmask.js"></script>
```

Это код делает прозрачными изображения, у которых в атрибуте mask указан путь к изображению маски.
Например:

```html
<img src="cloud.jpg" mask="cloud_mask.jpg">
```

#### Внимание! ####
Изображения должны находится на том же ресурсе, что и страница.

#### Особенности ####
* Размер маски может не соответствовать размеру изображения.
* Изображения и маски богут быть в других форматах JPG BMP GIF PNG.
* Информация о прозрачности берется из красного канала маски.
* Все теги `<img>` остаются теми же, в них меняется лишь `src` на DataURL нового изображения.



