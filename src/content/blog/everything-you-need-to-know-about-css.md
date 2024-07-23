---
title: Everything You Need to Know About CSS
pubDate: 2024-07-23
tags:
  - css
  - web-development
  - it2406
---

## Everything You Need to Know About CSS

### 1. Introduction to CSS

**What is CSS?**
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It allows you to control the layout, colors, fonts, and overall look and feel of web pages. CSS separates content from design, making it easier to maintain and update the appearance of your website.

**Why Use CSS?**
Using CSS helps you:
- **Enhance Visual Appeal**: Style elements to create an attractive and user-friendly interface.
- **Improve Maintainability**: Make changes in one place (the stylesheet) instead of altering HTML directly.
- **Ensure Consistency**: Apply consistent styles across multiple web pages.
- **Optimize Performance**: Reduce redundancy by separating content from design.

### 2. How to Include CSS in HTML

There are three main ways to include CSS in an HTML document:

**2.1. Inline CSS**
You can apply CSS directly to individual HTML elements using the `style` attribute. This method is generally used for quick, one-off styles.
```html
<p style="color: blue; font-size: 16px;">This is a blue text paragraph.</p>
```

**2.2. Internal CSS**
Internal CSS is defined within the `<style>` tag in the `<head>` section of your HTML document. This method is useful for applying styles to a single HTML page.
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: lightgray;
    }
    h1 {
      color: navy;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph styled using internal CSS.</p>
</body>
</html>
```

**2.3. External CSS**
External CSS involves linking a separate `.css` file to your HTML document using the `<link>` tag. This method is preferred for larger websites as it promotes reusability and easier maintenance.
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is a paragraph styled using external CSS.</p>
</body>
</html>
```
*In the `styles.css` file:*
```css
body {
  background-color: lightgray;
}
h1 {
  color: navy;
  font-family: Arial, sans-serif;
}
```

### 3. Styles Using CSS

**3.1. Styles Using CSS**
CSS styles are applied to HTML elements by targeting them with selectors and defining the styles using properties. The basic syntax is:
```css
selector {
  property: value;
}
```
For example:
```css
p {
  color: red;
  font-size: 14px;
}
```
This CSS rule will make all `<p>` elements have red text and a font size of 14 pixels.

**3.2. Styles and HTML**
HTML elements are styled by targeting their tag names, classes, IDs, or attributes in CSS. Understanding how to apply styles effectively ensures that your web page looks as intended.

### 4. CSS Selectors

**4.1. ID Selector**
Selects an element with a specific `id` attribute.
```css
#header {
  background-color: blue;
}
```

**4.2. Class Selector**
Selects elements with a specific `class` attribute.
```css
.button {
  padding: 10px 20px;
  background-color: green;
}
```

**4.3. Context Selector**
Targets elements based on their relationship to other elements.
```css
article p {
  color: gray;
}
```

**4.4. Group Selector**
Applies the same styles to multiple elements.
```css
h1, h2, h3 {
  margin-bottom: 10px;
}
```

**4.5. Element Selector**
Targets specific HTML elements.
```css
p {
  line-height: 1.5;
}
```

### 5. CSS Combinators

**5.1. Descendant Selector (space)**
Selects elements that are descendants of a specified element.
```css
ul li {
  list-style-type: square;
}
```

**5.2. Child Selector (>)**
Selects elements that are direct children of a specified element.
```css
div > p {
  margin-top: 0;
}
```

**5.3. Adjacent Sibling Selector (+)**
Selects an element that immediately follows another specified element.
```css
h2 + p {
  margin-top: 0;
}
```

**5.4. General Sibling Selector (~)**
Selects all sibling elements that follow a specified element.
```css
h2 ~ p {
  color: blue;
}
```

### 6. Values and Units

**6.1. Values and Units**
CSS uses different units for measurement:
- **Pixels (px)**: Absolute units used for precise sizing.
- **Em (em)**: Relative to the font-size of the element.
- **Rem (rem)**: Relative to the font-size of the root element.
- **Percent (%)**: Relative to the parent element’s dimensions.
- **Viewport Height (vh) and Width (vw)**: Relative to the viewport’s dimensions.

### 7. Text Properties

**7.1. Text Properties**
CSS provides several properties to control text appearance:
- **`font-family`**: Specifies the font.
- **`font-size`**: Defines the size of the text.
- **`font-weight`**: Sets the thickness of the text.
- **`line-height`**: Adjusts the space between lines of text.
- **`text-align`**: Aligns text to the left, right, center, or justify.

### 8. Fonts

**8.1. Fonts**
CSS allows you to specify fonts using:
- **`@font-face`**: To define custom fonts.
- **`font-family`**: To specify a list of fonts.
- **`font-style`**: To set text to italic or oblique.
- **`font-variant`**: For text in small-caps or other styles.

### 9. Colors and Background

**9.1. Colors and Background**
CSS provides properties to set colors and backgrounds:
- **`color`**: Sets the text color.
- **`background-color`**: Sets the background color of elements.
- **`background-image`**: Adds an image as a background.
- **`background-size`**: Defines the size of the background image.
- **`background-repeat`**: Controls if and how the background image repeats.

### 10. Visual Formatting

**10.1. Visual Formatting**
CSS visual formatting properties include:
- **`display`**: Defines how an element is displayed (block, inline, flex, grid).
- **`visibility`**: Controls the visibility of elements (visible, hidden).
- **`overflow`**: Specifies how content that overflows the element is handled (scroll, hidden).
- **`z-index`**: Sets the stack order of elements.

### 11. Boxes and Borders

**11.1. Boxes and Borders**
The box model in CSS includes:
- **`margin`**: Space outside the border.
- **`border`**: The border surrounding the padding.
- **`padding`**: Space between the content and the border.
- **`content`**: The actual content of the element.

### 12. Positioning

**12.1. Positioning**
CSS positioning properties control the placement of elements:
- **`static`**: Default positioning.
- **`relative`**: Positioned relative to its normal position.
- **`absolute`**: Positioned relative to the nearest positioned ancestor.
- **`fixed`**: Positioned relative to the viewport.
- **`sticky`**: Switches between relative and fixed positioning based on scroll position.

### 13. Table Layouts

**13.1. Table Layouts**
CSS properties for styling tables include:
- **`border-collapse`**: Controls the borders of adjacent cells.
- **`border-spacing`**: Sets the distance between table cells.
- **`table-layout`**: Defines how the table's width is calculated.
- **`caption-side`**: Specifies the position of the table caption.

### 14. User Interface Styles

**14.1. User Interface Styles**
CSS also styles user interface elements:
- **`appearance`**: Alters the default styling of form elements.
- **`border-radius`**: Creates rounded corners.
- **`box-shadow`**: Adds shadow effects to elements.

### 15. Introduction to CSS Preprocessors

**15.1. Introduction to CSS Preprocessors (LESS and SASS)**
CSS preprocessors extend CSS with features to improve development efficiency:
- **LESS** and **SASS** offer features like variables, nesting, and mixins.

**15.2. Variables**
Variables allow you to store values for reuse.
```scss
$primary-color: #333;
```

**15.3. Nested Syntax**
Write nested CSS rules to mirror HTML structure.
```scss
.container {
  .header {
    color: $primary-color;
  }
}
```

**15.4. Partials & Imports**
Split

 CSS into manageable files.
```scss
@import 'variables';
```

**15.5. Mixins, Extend/Inherit**
Reuse sets of CSS properties with mixins.
```scss
@mixin border-radius($radius) {
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
```
