# 3.2.1. Semantics

In this example styling may be used to create a visual representation of headings and other components, but because the appropriate HTML elements have not been used there is little **semantic information** available to web browsers, search engines and assistive technologies.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Favorite books</title>
  </head>
  <body>
    <div class="header">
       <img src="logo.png" alt="Favorite books logo">
    </div>
    <div class="main">
       <span class="largeHeading">Favorite books</span>
       <p>These are a few of my favorite books.</p>
       <span class="smallHeading">The Belgariad</span>
       <p>Five books by David and Leigh Eddings.</p>
       <span class="smallHeading">The Hitchhiker’s Guide to the Galaxy</span>
       <p>A trilogy of five books by Douglas Adams.</p>
    </div>
  </body>
</html>
```

This semantic information is critical to assistive technologies. For example, a screen reader will query the browser for semantic information and use that information to present the document or application in synthetic speech.

In some cases assistive technologies use semantic information to provide additional functionality. A speech recognition tool might provide a voice command for moving focus to the start of the `<main>` element for example.

In this example the HTML headings may be presented as large text in a desktop browser, or standard size text in bold in a mobile browser. In both cases the semantic information remains the same - that the `<h1>` and `<h2>` elements represent headings.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Favorite books</title>
  </head>
  <body>
    <header>
      <img src="logo.png" alt="Favorite books logo">
    </header>
    <main>
      <h1>Favorite books</h1>
      <p>These are a few of my favorite books.</p>
      <h2>The Belgariad</h2>
      <p>Five books by David and Leigh Eddings.</p>
      <h2>The Hitchhiker’s Guide to the Galaxy</h2>
      <p>A trilogy of five books by Douglas Adams.</p>
    </main>
  </body>
</html>
```

Without Sematics | With Semantics
---- | ----
`<div class="header">` | `<header>`
`<div class="main">` | `<main>`
`<span class="largeHeading">` | `<h1>`
`<span class="smallHeading">` | `<h2>`
