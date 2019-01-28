---
templateKey: design-guideline-post
title: List Group
description: Lists and tables are similar as both usually contain a vertical list of data, but lists generally contain basic data and tables tend to hold more complex data.
date: 2019-01-28T16:57:45.238Z
tags:
  - list group
--- 

 
If the list is a complex hierarchy, it is best to use a tree.

<br>

## Simple List

A link can be used to allow the user to access more details about the item.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        List item 1
    </li>
    <li class="fd-list-group__item">
        List item 2
    </li>
    <li class="fd-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
    </li>
    <li class="fd-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    </li>
</ul>
</div>
</div>

```html
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        List item 1
    </li>
    <li class="fd-list-group__item">
        List item 2
    </li>
    <li class="fd-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
    </li>
    <li class="fd-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    </li>
</ul>
```




<br>

## Lists with Action

The List item can contain quick actions.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        List item 1
        <span class="fd-list-group__action">
            <button class=" fd-button--light sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 2
        <span class="fd-list-group__action">
            <button class=" fd-button--light sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
        <span class="fd-list-group__action">
            <button class=" fd-button--light sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        <span class="fd-list-group__action">
            <button class=" fd-button--light sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
</ul>
</div>
</div>

```html
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        List item 1
        <span class="fd-list-group__action">
            <button class=" fd-button--light sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 2
        <span class="fd-list-group__action">
            <button class=" fd-button--light sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 3 - Lorem ipsum dolor sit amet, consectetur sed do
        <span class="fd-list-group__action">
            <button class=" fd-button--light sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
    <li class="fd-list-group__item">
        List item 4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        <span class="fd-list-group__action">
            <button class=" fd-button--light sap-icon--edit" aria-label="Edit"></button>
        </span>
    </li>
</ul>
```




<br>


## List with Checkboxes

Checkboxes can be include on the left of each line for such purposes as bulk actions.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="121Sd939">
                <input type="checkbox" class="fd-form__control" id="121Sd939">
                List item 1
            </label>
        </div>
    </li>
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="CndSd399">
                <input type="checkbox" class="fd-form__control" id="CndSd399">
                List item 2 sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </label>
        </div>
    </li>
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="S8jyH416">
                <input type="checkbox" class="fd-form__control" id="S8jyH416">
                List item 3
            </label>
        </div>
    </li>
</ul>
</div>
</div>

```html
<ul class="fd-list-group">
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="121Sd939">
                <input type="checkbox" class="fd-form__control" id="121Sd939">
                List item 1
            </label>
        </div>
    </li>
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="CndSd399">
                <input type="checkbox" class="fd-form__control" id="CndSd399">
                List item 2 sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </label>
        </div>
    </li>
    <li class="fd-list-group__item">
        <div class="fd-form__item fd-form__item--check">
            <label class="fd-form__label" for="S8jyH416">
                <input type="checkbox" class="fd-form__control" id="S8jyH416">
                List item 3
            </label>
        </div>
    </li>
</ul>
```


