# Chapter 3. Media Queries

```html
<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8" />
    <title>Media Query Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        body {
            background-color: grey;
        }
        @media (min-width: 320px) {
            body {
                background-color: green;
            }
        }
        @media (min-width: 550px) {
            body {
                background-color: yellow;
            }
        }
        @media (min-width: 768px) {
            body {
                background-color: orange;
            }
        }
        @media (min-width: 960px) {
            body {
                background-color: red;
            }
        }
    </style>
</head>
<body></body>
</html>
```

```javascript
background-color = 'grey'
if (width >= 320px)
    background-color = 'green'
if (width >= 550px)
    background-color = 'yellow'
if (width >= 768px)
    background-color = 'orange'
if (width >= 960px)
    background-color = 'red'
```

```html
<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Media Query Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body></body>
</html>
```

```css
/* styles.css */
body {
    background-color: grey;
}
@media (min-width: 320px) {
    body {
        background-color: green;
    }
}
@media (min-width: 550px) {
    body {
        background-color: yellow;
    }
}
@media (min-width: 768px) {
    body {
        background-color: orange;
    }
}
@media (min-width: 960px) {
    body {
        background-color: red;
    }
}
```
