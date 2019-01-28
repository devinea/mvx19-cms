---
templateKey: design-guideline-post
title: Menu
description: The menu component is the listing structure with optional headers to create menus.
date: 2019-01-28T16:57:45.232Z
tags:
  - menu
--- 

 
Commonly used as the contents when composing "dropdowns", "contextual menus", "mega menu", etc, when paired with the popover component.

<br>

## Menu
The basic stucture of a menu.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li><a href="#" class="fd-menu__item">Option 1</a></li>
        <li><a href="#" class="fd-menu__item">Option 2</a></li>
        <li><a href="#" class="fd-menu__item">Option 3</a></li>
        <li><a href="#" class="fd-menu__item">Option 4</a></li>
    </ul>
</nav>
</div>
</div>

```html
<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li><a href="#" class="fd-menu__item">Option 1</a></li>
        <li><a href="#" class="fd-menu__item">Option 2</a></li>
        <li><a href="#" class="fd-menu__item">Option 3</a></li>
        <li><a href="#" class="fd-menu__item">Option 4</a></li>
    </ul>
</nav>
```




## Menu list with separated items
Use a modifier on the list element to add separators between the items.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-menu">
    <ul class="fd-menu__list fd-menu__list--separated">
      <li><a href="#" class="fd-menu__item">Option 1</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 2</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 3</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 4</a>
    </li>
    </ul>
</nav>
</div>
</div>

```html
<nav class="fd-menu">
    <ul class="fd-menu__list fd-menu__list--separated">
      <li><a href="#" class="fd-menu__item">Option 1</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 2</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 3</a>
    </li>
      <li><a href="#" class="fd-menu__item">Option 4</a>
    </li>
    </ul>
</nav>
```






## Menu with group headers
You can optionally add hierarchy to menus by grouping sub-menus and adding headers.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li><a href="#" class="fd-menu__item">Option 1</a></li>
        <li><a href="#" class="fd-menu__item">Option 2</a></li>
        <li><a href="#" class="fd-menu__item">Option 3</a></li>
    </ul>
    <div class="fd-menu__group">
        <h1 class="fd-menu__title">Group Header</h1>
        <ul class="fd-menu__list">
            <li><a href="#" class="fd-menu__item">Option 4</a></li>
            <li><a href="#" class="fd-menu__item">Option 5</a></li>
            <li><a href="#" class="fd-menu__item">Option 6</a></li>
        </ul>
    </div>
</nav>
</div>
</div>

```html
<nav class="fd-menu">
    <ul class="fd-menu__list">
        <li><a href="#" class="fd-menu__item">Option 1</a></li>
        <li><a href="#" class="fd-menu__item">Option 2</a></li>
        <li><a href="#" class="fd-menu__item">Option 3</a></li>
    </ul>
    <div class="fd-menu__group">
        <h1 class="fd-menu__title">Group Header</h1>
        <ul class="fd-menu__list">
            <li><a href="#" class="fd-menu__item">Option 4</a></li>
            <li><a href="#" class="fd-menu__item">Option 5</a></li>
            <li><a href="#" class="fd-menu__item">Option 6</a></li>
        </ul>
    </div>
</nav>
```





## Menu with an addon container
This is an additional container that can be used for an icon or checkbox before the meni item text.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-menu fd-menu--addon-before">
    <ul class="fd-menu__list">
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 1</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"><span class="sap-icon--accept"></span></div>
            <a href="#" class="fd-menu__item">Option 2</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 3</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 4</a>
        </li>
    </ul>
</nav>
</div>
</div>

```html
<nav class="fd-menu fd-menu--addon-before">
    <ul class="fd-menu__list">
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 1</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"><span class="sap-icon--accept"></span></div>
            <a href="#" class="fd-menu__item">Option 2</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 3</a>
        </li>
        <li>
            <div class="fd-menu__addon-before"></div>
            <a href="#" class="fd-menu__item">Option 4</a>
        </li>
    </ul>
</nav>
```



