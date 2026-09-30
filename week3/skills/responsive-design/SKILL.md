---
name: responsive-design
description: Use when making a web page adapt to mobile, tablet, and desktop screen sizes with responsive CSS.
---

# Responsive Design

Use a simple mobile-first approach: make the default styles work on small screens, then add media queries for wider screens.

## Steps

1. Include the viewport meta tag in the HTML:

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

2. Prefer flexible sizes over fixed widths. For example, use `width: 100%` with a `max-width` so a card can shrink on mobile but not grow indefinitely:

   ```css
   .card {
     width: 100%;
     max-width: 30rem;
   }
   ```

3. Set small-screen styles as the defaults. Add a media query when the layout needs more space on wider screens:

   ```css
   h1 {
     font-size: 1.75rem;
   }

   @media (min-width: 600px) {
     h1 {
       font-size: 2.5rem;
     }
   }
   ```

4. Keep the breakpoint tied to when the content needs a layout change, rather than targeting a specific device model.
5. Check the page at narrow and wide viewport sizes. Make sure content fits without horizontal scrolling and remains readable.

## Nested media queries

If the project uses modern CSS nesting and prefers keeping responsive rules beside their selector, put the media query inside that selector:

```css
h1 {
  font-size: 1.75rem;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
}
```

Use the top-level media-query form when broader compatibility or the project’s existing style calls for it. Avoid mixing both styles unnecessarily in the same stylesheet.
