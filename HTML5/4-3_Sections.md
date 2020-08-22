# 4.3.2. The `article` element

The **article** element represents a complete, or self-contained, composition in a document, page, application, or site. This could be a magazine, newspaper, technical or scholarly article, an essay or report, a blog or other social media post.

A general rule is that the article element is appropriate only if the element’s contents would be listed explicitly in the document’s outline. Each article should be identified, typically by including a heading (h1-h6 element) as a child of the article element.

```html
<article>
  <header>
    <h2>The Very First Rule of Life</h2>
    <p><time datetime="2009-10-09">3 days ago</time></p>
  </header>
  <p>If there’s a microphone anywhere near you, assume it’s hot and
  sending whatever you’re saying to the world. Seriously.</p>
  <p>...</p>
  <section>
    <h3>Comments</h3>
    <ol>
      <li id="c1">
        <p>Posted by: <span>
        <span>George Washington</span>
        </span></p>
        <p><time datetime="2009-10-10">15 minutes ago</time></p>
        <p>Yeah! Especially when talking about your lobbyist friends!</p>
      <li id="c2">
        <p>Posted by: <span>
        <span>George Hammond</span>
        </span></p>
        <p><time datetime="2009-10-10">5 minutes ago</time></p>
        <p>Hey, you have the same first name as me.</p>
      </li>
    </ol>
  </section>
</article>
```

When article elements are nested, the inner article elements represent articles that are in principle related to the contents of the outer article. For instance, a blog entry on a site could consist of summaries of other blog entries in article elements nested within the article element for the blog entry.

> A section forms part of something else. An article is its own thing. But how does one know which is which? Mostly the real answer is "it depends on author intent".
>
> For example, one could imagine a book with a "Granny Smith" chapter that just said "These juicy, green apples make a great filling for apple pies."; that would be a section because there’d be lots of other chapters on (maybe) other kinds of apples.
>
> On the other hand, one could imagine a tweet or tumblr post or newspaper classified ad that just said "Granny Smith. These juicy, green apples make a great filling for apple pies."; it would then be articles because that was the whole thing.
>
> Comments on an article are not part of the article on which they are commenting, but are related, therefore may be contained in their own nested article.
>
> [4.3.10.1. Article or section?]

# 4.3.3. The `section` element

The **section** element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading (h1-h6 element) as a child of the section element.

In the following example, we see an article (part of a larger Web page) about apples, containing two short sections.

```html
<article>
  <header>
    <h2>Apples</h2>
    <p>Tasty, delicious fruit!</p>
  </header>
  <p>The apple is the pomaceous fruit of the apple tree.</p>
  <section aria-label="Red apples.">
    <h3>Red Delicious</h3>
    <p>These bright red apples are the most common found in
    many supermarkets.</p>
  </section>
  <section aria-label="Green apples.">
    <h3>Granny Smith</h3>
    <p>These juicy, green apples make a great filling for
    apple pies.</p>
  </section>
</article>
```

# 4.3.4. The `nav` element

The **nav** element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

In the following example, the page has several places where links are present, but only one of those places is considered a navigation section.

```html
<body>
  <header>
    <h1>Wake up sheeple!</h1>
    <p><a href="news.html">News</a> -
    <a href="blog.html">Blog</a> -
    <a href="forums.html">Forums</a></p>
    <p>Last Modified: 2009-04-01</p>
    <nav>
      <h2>Navigation</h2>
      <ul>
        <li><a href="articles.html">Index of all articles</a></li>
        <li><a href="today.html">Things sheeple need to wake up for today</a></li>
        <li><a href="successes.html">Sheeple we have managed to wake</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <header>
        <h2>My Day at the Beach</h2>
      </header>
      <section>
        <p>Today I went to the beach and had a lot of fun.</p>
        ...more content...
      </section>
      <footer>
        <p>Posted <time datetime="2009-10-10">Thursday</time></p>
      </footer>
    </article>
    ...more blog posts...
  </main>
  <footer>
    <p>Copyright ©
      <span>2010</span>
      <span>The Example Company</span>
    </p>
    <p><a href="about.html">About</a> -
      <a href="policy.html">Privacy Policy</a> -
      <a href="contact.html">Contact Us</a></p>
  </footer>
</body>
```

>Not all groups of links on a page need to be in a nav element — the element is primarily intended for sections that consist of major navigation blocks. In particular, it is common for footers to have a short list of links to various pages of a site, such as the terms of service, the home page, and a copyright page. The footer element alone is sufficient for such cases; while a nav element can be used in such cases, it is usually unnecessary.

# 4.3.5. The `aside` element

The **aside** element represents a section of a page that consists of content that is tangentially related to the content of the parenting sectioning content, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.

The element can be used for typographical effects like pull quotes or sidebars, for advertising, for groups of nav elements, and for other content that is considered separate from the main content of the nearest ancestor sectioning content.

The following extract shows how aside can be used for blogrolls and other side content on a blog:

```html
<body>
  <header>
    <h1>My wonderful blog</h1>
    <p>My tagline</p>
  </header>
  <aside>
    <!-- this aside contains two sections that are tangentially related
    to the page, namely, links to other blogs, and links to blog posts
    from this blog -->
    <nav>
      <h2>My blogroll</h2>
      <ul>
        <li><a href="https://blog.example.com/">Example Blog</a>
      </ul>
    </nav>
    <nav>
      <h2>Archives</h2>
      <ol reversed>
        <li><a href="/last-post">My last post</a>
        <li><a href="/first-post">My first post</a>
      </ol>
    </nav>
  </aside>
  <aside>
    <!-- this aside is tangentially related to the page also, it
    contains twitter messages from the blog author -->
    <h2>Twitter Feed</h2>
    <blockquote cite="https://twitter.example.net/t31351234">
      I’m on vacation, writing my blog.
    </blockquote>
    <blockquote cite="https://twitter.example.net/t31219752">
      I’m going to go on vacation soon.
    </blockquote>
  </aside>
  <article>
    <!-- this is a blog post -->
    <h2>My last post</h2>
    <p>This is my last post.</p>
    <footer>
      <p><a href="/last-post" rel=bookmark>Permalink</a>
    </footer>
  </article>
  <article>
    <!-- this is also a blog post -->
    <h2>My first post</h2>
    <p>This is my first post.</p>
    <aside>
      <!-- this aside is about the blog post, since it’s inside the
      <article> element; it would be wrong, for instance, to put the
        blogroll here, since the blogroll isn’t really related to this post
        specifically, only to the page as a whole -->
        <h1>Posting</h1>
        <p>While I’m thinking about it, I wanted to say something about
        posting. Posting is fun!</p>
    </aside>
    <footer>
      <p><a href="/first-post" rel=bookmark>Permalink</a>
    </footer>
  </article>
  <footer>
    <nav>
      <a href="/archives">Archives</a> —      <a href="/about">About me</a> —      <a href="/copyright">Copyright</a>
    </nav>
  </footer>
</body>
```

# 4.3.6. The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements

These elements represent headings for their sections.

These elements have a **rank** given by the number in their name. The h1 element has the highest rank, the h6 element has the lowest rank, and two elements with the same name have equal rank.

As far as their respective document outlines (their heading and section structures) are concerned, these two snippets are semantically equivalent:

```html
<body>
  <h1>Let’s call it a draw(ing surface)</h1>
  <h2>Diving in</h2>
  <h2>Simple shapes</h2>
  <h2>Canvas coordinates</h2>
  <h3>Canvas coordinates diagram</h3>
  <h2>Paths</h2>
</body>
```

```html
<body>
  <h1>Let’s call it a draw(ing surface)</h1>
  <section>
    <h2>Diving in</h2>
  </section>
  <section>
    <h2>Simple shapes</h2>
  </section>
  <section>
    <h2>Canvas coordinates</h2>
    <section>
      <h3>Canvas coordinates diagram</h3>
    </section>
  </section>
  <section>
    <h2>Paths</h2>
  </section>
</body>
```

Authors might prefer the former style for its terseness, or the latter style for its convenience in the face of heavy editing; which is best is purely an issue of preferred authoring style.

# 4.3.7. The `header` element

The **header** element represents introductory content for its nearest ancestor main element or sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids.

When a header element’s nearest ancestor sectioning root element is the body element, and it is not a descendant of the main element or a sectioning content element, then that header is scoped to the body element and represents introductory content for the page as a whole.

A header element is intended to usually contain the section’s heading (an h1–h6 element), but this is not required. The header element can also be used to wrap a section’s table of contents, a search form, or any relevant logos.

The following snippet shows how the element can be used to mark up a specification’s header:

```html
<header>
  <h1>Scalable Vector Graphics (SVG) 1.2</h1>
  <p>W3C Working Draft 27 October 2004</p>
  <dl>
    <dt>This version:</dt>
    <dd><a href="https://www.w3.org/TR/2004/WD-SVG12-20041027/">https://www.w3.org/TR/2004/WD-SVG12-20041027/</a></dd>
    <dt>Previous version:</dt>
    <dd><a href="https://www.w3.org/TR/2004/WD-SVG12-20040510/">https://www.w3.org/TR/2004/WD-SVG12-20040510/</a></dd>
    <dt>Latest version of SVG 1.2:</dt>
    <dd><a href="https://www.w3.org/TR/SVG12/">https://www.w3.org/TR/SVG12/</a></dd>
    <dt>Latest SVG Recommendation:</dt>
    <dd><a href="https://www.w3.org/TR/SVG/">https://www.w3.org/TR/SVG/</a></dd>
    <dt>Editor:</dt>
    <dd>Dean Jackson, W3C, <a href="mailto:dean@w3.org">dean@w3.org</a></dd>
    <dt>Authors:</dt>
    <dd>See <a href="#authors">Author List</a></dd>
  </dl>
  <p class="copyright"><a href="https://www.w3.org/Consortium/Legal/ipr-notic ...
</header>
```

> The header element is not sectioning content; it doesn’t introduce a new section.

# 4.3.8. The `footer` element

The **footer** element represents a footer for its nearest ancestor main element or sectioning content or sectioning root element. A footer typically contains information about its section, such as who wrote it, links to related documents, copyright data, and the like.

A footer element can also contain entire sections representing appendices, indexes, long colophons, verbose license agreements, and other such content.

> Contact information for the author or editor of a section belongs in an address element, possibly itself inside a footer. Bylines and other information that could be suitable for both a header or a footer can be placed in either (or neither).

Footers don’t necessarily have to appear at the end of a section, though they usually do.

> The footer element is not sectioning content; it doesn’t introduce a new section.

Here is an example which shows the footer element being used both for a site-wide footer and for a section footer.

```html
<!DOCTYPE HTML>
<HTML><HEAD>
<TITLE>The Ramblings of a Scientist</TITLE>
<BODY>
<h1>The Ramblings of a Scientist</h1>
<MAIN>
  <ARTICLE>
  <H2>Episode 15</H2>
  <VIDEO SRC="/fm/015.ogv" CONTROLS PRELOAD>
  <P><A HREF="/fm/015.ogv">Download video</A>.</P>
  </VIDEO>
  <FOOTER> <!-- footer for article -->
  <P>Published <TIME DATETIME="2009-10-21T18:26-07:00">on 2009/10/21 at 6:26pm</TIME></P>
  </FOOTER>
</ARTICLE>
<ARTICLE>
  <H2>My Favorite Trains</H2>
  <P>I love my trains. My favorite train of all time is a Köf.</P>
  <P>It is fun to see them pull some coal cars because they look so
  dwarfed in comparison.</P>
  <FOOTER> <!-- footer for article -->
  <P>Published <TIME DATETIME="2009-09-15T14:54-07:00">on 2009/09/15 at 2:54pm</TIME></P>
  </FOOTER>
  </ARTICLE>
</MAIN>
<FOOTER> <!-- site wide footer -->
  <NAV>
  <P><A HREF="/credits.html">Credits</A> —      <A HREF="/tos.html">Terms of Service</A> —      <A HREF="/index.html">Blog Index</A></P>
  </NAV>
  <P>Copyright © 2009 Gordon Freeman</P>
</FOOTER>
</BODY>
</HTML>
```
