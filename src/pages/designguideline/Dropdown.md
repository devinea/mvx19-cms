---
templateKey: design-guideline-post
title: Dropdown
description: The dropdown allows users to make one selection from a list.
date: 2019-01-28T16:57:45.242Z
tags:
  - dropdown
--- 

 
It is an opinionated composition of the `popover` and `menu` components with the use of a styled button. It is more flexible than the normal `select`. Generally, it should be used when there are between 3 to 10 or more options.

<br>

## Default Dropdown

The dropdown is designed to look like the rest of input components. The options can be divided in groups, which are visually separated and can have a small Group header text.

<style type="text/css">
.fd-popover {
    margin: 0 0 20px 0;
}
.fd-popover:last-child {
    margin-bottom: 0;
}
</style>

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-dropdown">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button  " aria-controls="h0C6A325"
         aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="h0C6A325">
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
</div>


<div class="fd-dropdown fd-dropdown--compact">
  <div class="fd-popover">
    <div class="fd-popover__control">
      <button class="fd-dropdown__control fd-button    fd-button--compact" aria-controls="dbkLJ896" aria-expanded="false" aria-haspopup="true">
          Select
      </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="dbkLJ896">
      <div class="fd-menu">
        <ul class="fd-menu__list">
          <li><a href="#" class="fd-menu__item">Option 1</a></li>
          <li><a href="#" class="fd-menu__item">Option 2</a></li>
          <li><a href="#" class="fd-menu__item">Option 3</a></li>
          <li><a href="#" class="fd-menu__item">Option 4</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
</div>

```html
<div class="fd-dropdown">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button  " aria-controls="h0C6A325"
         aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="h0C6A325">
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
</div>


<div class="fd-dropdown fd-dropdown--compact">
  <div class="fd-popover">
    <div class="fd-popover__control">
      <button class="fd-dropdown__control fd-button    fd-button--compact" aria-controls="dbkLJ896" aria-expanded="false" aria-haspopup="true">
          Select
      </button>
    </div>
    <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="dbkLJ896">
      <div class="fd-menu">
        <ul class="fd-menu__list">
          <li><a href="#" class="fd-menu__item">Option 1</a></li>
          <li><a href="#" class="fd-menu__item">Option 2</a></li>
          <li><a href="#" class="fd-menu__item">Option 3</a></li>
          <li><a href="#" class="fd-menu__item">Option 4</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```




<br />

## Dropdown with Icon

It can also include complementary information like an icon.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-dropdown">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button sap-icon--filter "
         aria-controls="sXq41189" aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="sXq41189">
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
</div>

<div class="fd-dropdown fd-dropdown--compact">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button  fd-button--compact sap-icon--filter "
         aria-controls="sXq411891" aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="sXq411891">
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
</div>
</div>
</div>

```html
<div class="fd-dropdown">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button sap-icon--filter "
         aria-controls="sXq41189" aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="sXq41189">
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
</div>

<div class="fd-dropdown fd-dropdown--compact">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button  fd-button--compact sap-icon--filter "
         aria-controls="sXq411891" aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="sXq411891">
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
</div>
```





<br />

## Toolbar Dropdown

Disabled state can be rendered with a `is-disabled` class and/or `aria-disabled="true"` attribute.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-dropdown fd-dropdown--standard">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button   fd-button--standard" aria-controls="Og5y3993"
         aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="Og5y3993">
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
</div>

<div class="fd-dropdown fd-dropdown--standard fd-dropdown--compact">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button   fd-button--standard fd-button--compact" aria-controls="Og5y399"
         aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="Og5y399">
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
</div>
</div>
</div>

```html
<div class="fd-dropdown fd-dropdown--standard">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button   fd-button--standard" aria-controls="Og5y3993"
         aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="Og5y3993">
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
</div>

<div class="fd-dropdown fd-dropdown--standard fd-dropdown--compact">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button   fd-button--standard fd-button--compact" aria-controls="Og5y399"
         aria-expanded="false" aria-haspopup="true">
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="Og5y399">
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
</div>
```




<br />

## Disabled State

Disabled state can be rendered with a `is-disabled` class and/or `aria-disabled="true"` attribute.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-dropdown">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button sap-icon--filter " aria-controls="GEAva783"
         aria-expanded="false" aria-haspopup="true" disabled>
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="GEAva783">
      </div>
   </div>
</div>
</div>
</div>

```html
<div class="fd-dropdown">
   <div class="fd-popover">
      <div class="fd-popover__control">
         <button class="fd-dropdown__control fd-button sap-icon--filter " aria-controls="GEAva783"
         aria-expanded="false" aria-haspopup="true" disabled>
         Select
         </button>
      </div>
      <div class="fd-popover__body fd-popover__body--no-arrow"  aria-hidden="true" id="GEAva783">
      </div>
   </div>
</div>
```



