JpgMask
=======

Позволяет использовать JPG файлы в качестве маски изображения.


### Usage ###
Скачайте файл [jpgmask.js](https://raw.github.com/Borodin/JpgMask/master/lib/jpgmask.js) и в ставте его в html страницу.

```html
<script src="js/three.min.js"></script>
```

Это код сделает прозрачными картики, у которых в атрибуте mask указан путь к изображению маски.
Например:

```html
<img src="cloud.jpg" mask="cloud_mask.jpg">
```
