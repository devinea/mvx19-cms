---
templateKey: design-guideline-post
title: Icon
description: Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun.
date: 2019-01-28T16:57:45.228Z
tags:
  - icon
--- 

 
Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components.

<br>

## Icon usage and size options

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="sap-icon--cart sap-icon--s"></span>
<span class="sap-icon--cart"></span>
<span class="sap-icon--cart sap-icon--m"></span>
<span class="sap-icon--cart sap-icon--l"></span>
<span class="sap-icon--cart sap-icon--xl"></span>
</div>
</div>

```html
<span class="sap-icon--cart sap-icon--s"></span>
<span class="sap-icon--cart"></span>
<span class="sap-icon--cart sap-icon--m"></span>
<span class="sap-icon--cart sap-icon--l"></span>
<span class="sap-icon--cart sap-icon--xl"></span>
```



<br />

## Icon animations

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="sap-icon--synchronize sap-icon--xl sap-icon--animate-spin"></span>
<span class="sap-icon--synchronize sap-icon--xl sap-icon--animate-pulse"></span>
</div>
</div>

```html
<span class="sap-icon--synchronize sap-icon--xl sap-icon--animate-spin"></span>
<span class="sap-icon--synchronize sap-icon--xl sap-icon--animate-pulse"></span>
```



## Available Icons

<div class="demo-icon-wrapper">
  <!-- <span class="sap-icon--{{ icon.name }} sap-icon--s"></span>
  <span class="sap-icon--{{ icon.name }}"></span>
  <span class="sap-icon--{{ icon.name }} sap-icon--m"></span>
  <span class="sap-icon--{{ icon.name }} sap-icon--l"></span> -->
  <span class="sap-icon--{{ icon.name }} sap-icon--xl"></span>
  <h5>.sap-icon--{{ icon.name }}</h5>
</div>

