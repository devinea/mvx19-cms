---
templateKey: design-guideline-post
title: Side Navigation
description: The left navigation can always display or expand/collapse using the menu icon within the global navigation.
date: 2019-01-28T16:57:45.227Z
tags:
  - side navigation
--- 

 

<br>

## Side Navigation with one level

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-side-nav">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link is-selected" aira-selected="true" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
    </ul>
</nav>
</div>
</div>

```html
<nav class="fd-side-nav">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link is-selected" aira-selected="true" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                Link Item
            </a>
        </li>
    </ul>
</nav>
```



<br>

## Side navigation with titles
Use this to group navigation. Titles are not clickable.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-side-nav">
    <div class="fd-side-nav__group">
        <h1 class="fd-side-nav__title">Group Title</h1>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    icon link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    icon link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__group">
        <h1 class="fd-side-nav__title">Group Title</h1>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
</nav>
</div>
</div>

```html
<nav class="fd-side-nav">
    <div class="fd-side-nav__group">
        <h1 class="fd-side-nav__title">Group Title</h1>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    icon link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    icon link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
    <div class="fd-side-nav__group">
        <h1 class="fd-side-nav__title">Group Title</h1>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
</nav>
```




## Side navigation with multiple levels
Use this when there is more than one level of hierarchy in the left navigation. Each level can be expanded and collapsed.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-side-nav">
    <div class="fd-side-nav__group">
        <h1 class="fd-side-nav__title">Group Name</h1>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link has-child" href="#" aria-controls="Rk65C501"
                aria-haspopup="true">
                item link
            </a>
            <ul class="fd-side-nav__sublist" id="Rk65C501" aria-hidden="true">
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
            </ul>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link has-child" href="#" aria-controls="mM3Zf660"
            aria-haspopup="true">
            item link
        </a>
        <ul class="fd-side-nav__sublist" id="mM3Zf660" aria-hidden="true">
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-side-nav__item">
        <a class="fd-side-nav__link has-child" href="#" aria-controls="8t8RN919"
        aria-haspopup="true">
        item link
    </a>
    <ul class="fd-side-nav__sublist" id="8t8RN919" aria-hidden="true">
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
    </ul>
</li>
<li class="fd-side-nav__item">
    <a class="fd-side-nav__link" href="#">
        item link
    </a>
</li>
</ul>
</div>
<div class="fd-side-nav__group">
    <h1 class="fd-side-nav__title">Group Name</h1>
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                item link
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                item link
            </a></li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
</nav>
</div>
</div>

```html
<nav class="fd-side-nav">
    <div class="fd-side-nav__group">
        <h1 class="fd-side-nav__title">Group Name</h1>
        <ul class="fd-side-nav__list">
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link has-child" href="#" aria-controls="Rk65C501"
                aria-haspopup="true">
                item link
            </a>
            <ul class="fd-side-nav__sublist" id="Rk65C501" aria-hidden="true">
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
                <li class="fd-side-nav__subitem">
                    <a class="fd-side-nav__sublink" href="#">
                        Link
                    </a>
                </li>
            </ul>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link has-child" href="#" aria-controls="mM3Zf660"
            aria-haspopup="true">
            item link
        </a>
        <ul class="fd-side-nav__sublist" id="mM3Zf660" aria-hidden="true">
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
            <li class="fd-side-nav__subitem">
                <a class="fd-side-nav__sublink" href="#">
                    Link
                </a>
            </li>
        </ul>
    </li>
    <li class="fd-side-nav__item">
        <a class="fd-side-nav__link has-child" href="#" aria-controls="8t8RN919"
        aria-haspopup="true">
        item link
    </a>
    <ul class="fd-side-nav__sublist" id="8t8RN919" aria-hidden="true">
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
        <li class="fd-side-nav__subitem">
            <a class="fd-side-nav__sublink" href="#">
                Link
            </a>
        </li>
    </ul>
</li>
<li class="fd-side-nav__item">
    <a class="fd-side-nav__link" href="#">
        item link
    </a>
</li>
</ul>
</div>
<div class="fd-side-nav__group">
    <h1 class="fd-side-nav__title">Group Name</h1>
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                item link
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                item link
            </a></li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
            <li class="fd-side-nav__item">
                <a class="fd-side-nav__link" href="#">
                    item link
                </a>
            </li>
        </ul>
    </div>
</nav>
```



<br>

## Side navigation with icons

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-side-nav">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
    </ul>
</nav>
</div>
</div>

```html
<nav class="fd-side-nav">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
                Link icon
            </a>
        </li>
    </ul>
</nav>
```



<br>

## Side navigation collapsed with icons
The user can identify which level they are on based on the icon displayed as selected when the navigation is collapsed. Note that the suggested use is when there is only one level of navigation as the user can only see one level of navigation when collapsed.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<nav class="fd-side-nav fd-side-nav--icons">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
    </ul>
</nav>
</div>
</div>

```html
<nav class="fd-side-nav fd-side-nav--icons">
    <ul class="fd-side-nav__list">
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
        <li class="fd-side-nav__item">
            <a class="fd-side-nav__link" href="#">
                <span class="fd-side-nav__icon sap-icon--home sap-icon--l" role="presentation"></span>
            </a>
        </li>
    </ul>
</nav>
```


