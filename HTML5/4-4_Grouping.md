# 4.4.2. The `address` element

The **address** element represents contact information for a person, people or organization. It should include physical and/or digital location/contact information and a means of identifying a person(s) or organization the information pertains to.

For example, the W3C twitter account:

```html
<address>
<p>W3C on Twitter:
<p><a href="https://twitter.com/w3c">@w3c</a>
</address>
```

Address, telephone and fax numbers for an organization:

```html
<address>      
UNIVERSITY INTERSCHOLASTIC LEAGUE<br>
1701 Manor Road, Austin, TX 78722<br>
Tel: (512) 471-5883 | Fax: (512) 471-5908
</address>
```

The address part of a form output:

```html
...
<label for="name">Name:</label> <input type="text" id="name">
<label for="hn">House number:</label> <input type="text" id="hn">
<label for="street">Street:</label> <input type="text" id="street">
...
<address>
<p>Name: Hament Dhanji
<p>House number: 1976
<p>Street: Meadowband Road
...
</address>
```

Location of a cat:

```html
<address>Lola the cat is at
Latitude: 51.413126
Longtitude: -0.298219
</address>
```

The meaning and usage contexts of the address element is broad. If developers wish to provide more granular and specific semantics for the address element, use of any of the various semantic web metadata schemas is suggested.

For example, the postal address of a local business annotated using RDFa:

```html
<div vocab="http://schema.org/" typeof="LocalBusiness">
<h1><span property="name">Beachwalk Beachwear & Giftware</span></h1>
<span property="description"> A superb collection of fine gifts and clothing
to accent your stay in Mexico Beach.</span>

<address property="address" typeof="PostalAddress">
<span property="streetAddress">3102 Highway 98</span>
<span property="addressLocality">Mexico Beach</span>,
<span property="addressRegion">FL</span>
</address>

Phone: <span property="telephone">850-648-4200</span>
</div>
```

# 4.4.12. The `figure` element

The **figure** element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.

> "Self-contained" in this context does not necessarily mean independent. For example, each sentence in a paragraph is self-contained; an image that is part of a sentence would be inappropriate for figure, but an entire sentence made of images would be fitting.

The element can thus be used to annotate illustrations, diagrams, photos, code listings, etc.

> When a figure is referred to from the main content of the document by identifying it by its caption (e.g., by figure number), it enables such content to be easily moved away from that primary content, e.g., to the side of the page, to dedicated pages, or to an appendix, without affecting the flow of the document.
>
> If a figure element is referenced by its relative position, e.g., "in the photograph above" or "as the next figure shows", then moving the figure would disrupt the page’s meaning. Authors are encouraged to consider using labels to refer to figures, rather than using such relative references, so that the page can easily be restyled without affecting the page’s meaning.

This example shows the figure element to mark up a code listing.

```html
<p>In <a href="#l4">listing 4</a> we see the primary core interface
API declaration.</p>
<figure id="l4">
  <figcaption>Listing 4. The primary core interface API declaration.</figcaption>
  <pre><code>interface PrimaryCore {
  boolean verifyDataLine();
  void sendData(in sequence&lt;byte> data);
  void initSelfDestruct();
}</code></pre>
</figure>
<p>The API is designed to use UTF-8.</p>
```

In this example, we see an image that is not a figure, as well as an image and a video that are. The first image is literally part of the example’s second sentence, so it’s not a self-contained unit, and thus figure would be inappropriate.

```html
<h2>Malinko’s comics</h2>

<p>This case centered on some sort of "intellectual property"
infringement related to a comic (see Exhibit A). The suit started
after a trailer ending with these words:

<blockquote>
  <img src="promblem-packed-action.png" alt="ROUGH COPY! Promblem-Packed Action!">
</blockquote>

<p>...was aired. A lawyer, armed with a Bigger Notebook, launched a
preemptive strike using snowballs. A complete copy of the trailer is
included with Exhibit B.

<figure>
  <img src="ex-a.png" alt="Two squiggles on a dirty piece of paper.">
  <figcaption>Exhibit A. The alleged <cite>rough copy</cite> comic.</figcaption>
</figure>

<figure>
  <video src="ex-b.mov"></video>
  <figcaption>Exhibit B. The <cite>Rough Copy</cite> trailer.</figcaption>
</figure>

<p>The case was resolved out of court.
```

Here, a part of a poem is marked up using figure.

```html
<figure>
  <p>'Twas brillig, and the slithy toves<br>
  Did gyre and gimble in the wabe;<br>
  All mimsy were the borogoves,<br>
  And the mome raths outgrabe.</p>
  <figcaption><cite>Jabberwocky</cite> (first verse). Lewis Carroll, 1832-98</figcaption>
</figure>
```

In this example, which could be part of a much larger work discussing a castle, nested figure elements are used to provide both a group caption and individual captions for each figure in the group:

```html
<figure>
  <figcaption>The castle through the ages: 1423, 1858, and 1999 respectively.</figcaption>
  <figure>
    <figcaption>Etching. Anonymous, ca. 1423.</figcaption>
    <img src="castle1423.jpeg" alt="The castle has one tower, and a tall wall around it.">
  </figure>
  <figure>
    <figcaption>Oil-based paint on canvas. Maria Towle, 1858.</figcaption>
    <img src="castle1858.jpeg" alt="The castle now has two towers and two walls.">
  </figure>
  <figure>
    <figcaption>Film photograph. Peter Jankle, 1999.</figcaption>
    <img src="castle1999.jpeg" alt="The castle lies in ruins, the original tower all that remains in one piece.">
  </figure>
</figure>
```

# 4.4.14. The `main` element

The **main** element represents the main content of the body of a document or application.

> The main element is not sectioning content and has no effect on the document outline.

The main content area of a document includes content that is unique to that document and excludes content that is repeated across a set of documents such as
- site navigation links,
- copyright information,
- site logos and banners and
- search forms (unless the document or application’s main function is that of a search form).

Authors must not include the main element as a descendant of an
- article,
- aside,
- footer,
- header or
- nav element.

> The main element is not suitable for use to identify the main content areas of sub sections of a document or application.

In the following example, we see 2 articles about skateboards (the main topic of a Web page) the main topic content is identified by the use of the main element.

```html
<main>

  <h1>Skateboards</h1>
  <p>The skateboard is the way cool kids get around</p>

  <article>
    <h2>Longboards</h2>
    <p>Longboards are a type of skateboard with a longer
    wheelbase and larger, softer wheels.</p>
    <p>... </p>
    <p>... </p>
  </article>

  <article>
    <h2>Electric Skateboards</h2>
    <p>These no longer require the propelling of the skateboard
    by means of the feet; rather an electric motor propels the board,
    fed by an electric battery.</p>
    <p>... </p>
    <p>... </p>
  </article>

</main>
```

In the next example, both the header and the footer are outside the main element because they are generic to the website and not specific to main's content.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Great Dogs for Families</title>
  </head>
  <body>

    <header>
      <h1>The Border Terrier</h1>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="health.html">Health</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>Welcome!</h2>
      <p>This site is all about the Border Terrier, the best breed of dog
      that there is!</p>
    </main>
    <footer>
      <small>Copyright © <time datetime="2013">2013</time> by I. Devlin</small>
    </footer>

  </body>
</html>
```

Here, the same generic header and footer elements remain outside main, but there is an additional header element within the main element as its content is relevant to the content within main because it contains a relevant heading and in-page navigation. The in-page navigation is repeated within a footer which is again within the main element.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Great Dogs for Families</title>
  </head>
  <body>

    <header>
      <h1>The Border Terrier</h1>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="health.html">Health</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <header>
          <h2>About</h2>
          <nav>
            <ul>
              <li><a href="#basic">Basic</a></li>
              <li><a href="#app">Appearance</a></li>
              <li><a href="#temp">Temperament</a></li>
            </ul>
          </nav>
        </header>
        <section id="basic">
          <h3>Basic Information</h3>
          <p>The Border Terrier is a small, rough-coated breed of
          dog of the terrier group, originally bred as fox and vermin
          hunters. [...]</p>
        </section>
        <section id="app">
          <h3>Appearance</h3>
          <p>Identifiable by their otter-shaped heads, Border Terriers
          have a broad skull and short (although many be fairly long),
          strong muzzle with a scissors bite. [...]</p>
        </section>
        <section id="temp">
          <h3>Temperament</h3>
          <p>Though sometimes stubborn and strong willed, border terriers
          are, on the whole very even tempered, and are friendly and rarely
          aggressive. [...] </p>
        </section>
        <footer>
          <a href="#basic">Basic</a> -
          <a href="#app">Appearance</a> -
          <a href="#temp">Temperament</a>
        </footer>
      </section>
    </main>
    <footer>
      <small>Copyright © <time datetime="2013">2013</time> by I. Devlin</small>
    </footer>

  </body>
</html>
```

# 4.4.15. The `div` element

The **div** element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.

> Authors are strongly encouraged to view the div element as an element of last resort, for when no other element is suitable. Use of more appropriate elements instead of the div element leads to better accessibility for readers and easier maintainability for authors.

For example, a blog post would be marked up using article, a chapter using section, a page’s navigation aids using nav, and a group of form controls using fieldset.

On the other hand, div elements can be useful for stylistic purposes or to wrap multiple paragraphs within a section that are all to be annotated in a similar way. In the following example, we see div elements used as a way to set the language of two paragraphs at once, instead of setting the language on the two paragraph elements separately:

```html
<article lang="en-US">
  <h2>My use of language and my cats</h2>
  <p>My cat’s behavior hasn’t changed much since her absence, except
  that she plays her new physique to the neighbors regularly, in an
  attempt to get pets.</p>
  <div lang="en-GB">
  <p>My other cat, colored black and white, is a sweetie. He followed
  us to the pool today, walking down the pavement with us. Yesterday
  he apparently visited our neighbours. I wonder if he recognizes that
  their flat is a mirror image of ours.</p>
  <p>Hm, I just noticed that in the last paragraph I used British
  English. But I’m supposed to write in American English. So I
  shouldn’t say "pavement" or "flat" or "color"...</p>
  </div>
  <p>I should say "sidewalk" and "apartment" and "color"!</p>
</article>
```
