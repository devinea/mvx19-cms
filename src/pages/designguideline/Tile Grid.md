---
templateKey: design-guideline-post
title: Tile Grid
description: A tile grid is layout component used to display [`tiles`](tile.html) on a grid layout.
date: 2019-01-28T16:57:45.305Z
tags:
  - tile grid
--- 

 

> This uses CSS grid which is [not supported by some older browsers](https://caniuse.com/#feat=css-grid). A flexbox fallback is included but it is recommended you test your page if you have a significant number of users on IE 11, for example.

<br>

## 3-col grid (default)

Also available as a modifier class `--3col`


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-tile-grid">
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
</div>
</div>

```html
<div class="fd-tile-grid">
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
```



<br>


## 2 col grid


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-tile-grid fd-tile-grid--2col">
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
</div>
</div>

```html
<div class="fd-tile-grid fd-tile-grid--2col">
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__media">
            <span class=" fd-identifier--m sap-icon--home fd-has-background-color-accent-3"></span>
        </div>
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
```



<br>

## 4 col grid


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-tile-grid fd-tile-grid--4col">
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
</div>
</div>

```html
<div class="fd-tile-grid fd-tile-grid--4col">
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
```



<br>

## 5 col grid


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-tile-grid fd-tile-grid--5col">
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
</div>
</div>

```html
<div class="fd-tile-grid fd-tile-grid--5col">
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
```



<br>

## 6 col grid


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-tile-grid fd-tile-grid--6col">
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
</div>
</div>

```html
<div class="fd-tile-grid fd-tile-grid--6col">
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
            <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
```



<br>

## Product Tile Grid (2 col)


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-tile-grid fd-tile-grid--2col">
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
</div>
</div>

```html
<div class="fd-tile-grid fd-tile-grid--2col">
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-product-tile" role="button">
        <div class="fd-product-tile__media" style="background-image: url('https://techne.yaas.io/images/product-thumbnail-wide.png');"></div>
        <div class="fd-product-tile__content">
          <h2 class="fd-product-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
```



<br>

## 6 col grid w/ span helpers
Shows use of helper classes `.fd-has-grid-row-span-2` and `.fd-has-grid-column-span-2`.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-tile-grid fd-tile-grid--6col">
    <div class="fd-tile fd-has-grid-row-span-2 fd-has-background-color-accent-7">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile fd-has-grid-column-span-2 fd-has-background-color-accent-7">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
</div>
</div>

```html
<div class="fd-tile-grid fd-tile-grid--6col">
    <div class="fd-tile fd-has-grid-row-span-2 fd-has-background-color-accent-7">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
    <div class="fd-tile fd-has-grid-column-span-2 fd-has-background-color-accent-7">
        <div class="fd-tile__content">
          <h2 class="fd-tile__title">Lorem ipsum</h2>
        </div>
    </div>
</div>
```



<br>
