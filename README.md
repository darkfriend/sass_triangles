Mixins for create triangles in CSS

## Used

###Mixins:
* triangle-up
* triangle-down
* triangle-left
* triangle-right
* triangle-up-right
* triangle-up-left
* triangle-down-right
* triangle-down-left
 
```scss
@include triangle-up($size, $color);
```
###Example

scss
```scss
@include triangle-up(10px, #fff);
```

css
```css
border: 10px solid transparent;
border-bottom: 10px solid #fff;
```
