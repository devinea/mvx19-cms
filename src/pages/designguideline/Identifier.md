---
templateKey: design-guideline-post
title: Identifier
description: Identifier is a way to visually present something using an icon or user initials.
date: 2019-01-28T16:57:45.280Z
tags:
  - icon
--- 

 

There are multiple sizes:
- Default matches the base font size (14px)
- Extra Extra Small (`--xxs` - 20px)
- Extra Small (`--xs` - 28px)
- Small (`--s`) - 32px
- Medium (`--m`) - 48px
- Large (`--l`) - 64px
- Extra Large (`--xl`) - 88px
- Extra Extra Large (`--xxl`) - 112px

<br>

## Icon
Include `role="presentation"` when the identifier is used for only illustrative purposes. For example, if the icon sits right next to a label, use role.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class=" fd-identifier--xxs sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--xs sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--s sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--l sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--xl sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--xxl sap-icon--washing-machine" role="presentation"></span>
</div>
</div>

```html
<span class=" fd-identifier--xxs sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--xs sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--s sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--l sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--xl sap-icon--washing-machine" role="presentation"></span>
<span class=" fd-identifier--xxl sap-icon--washing-machine" role="presentation"></span>
```


<br>

## Initials
Include aria-label when there is no text equivalent for the identifier. This is not necessary if the identifier is used for illustrative purposes only. See Icon above.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class=" fd-identifier--xxs" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xs" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--s" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--m" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--l" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xl" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xxl" aria-label="Wendy Wallace">WW</span>
</div>
</div>

```html
<span class=" fd-identifier--xxs" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xs" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--s" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--m" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--l" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xl" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xxl" aria-label="Wendy Wallace">WW</span>
```


<br>

## Circle
A circle style can be rendered using the `--circle` modifier.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class=" fd-identifier--xxs fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--xs fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--s fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--m fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--l fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--l fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--l fd-identifier--circle sap-icon--money-bills" role="presentation"></span>

<span class=" fd-identifier--xxs fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xs fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--s fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--m fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--l fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xl fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xxl fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
</div>
</div>

```html
<span class=" fd-identifier--xxs fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--xs fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--s fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--m fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--l fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--l fd-identifier--circle sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--l fd-identifier--circle sap-icon--money-bills" role="presentation"></span>

<span class=" fd-identifier--xxs fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xs fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--s fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--m fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--l fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xl fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xxl fd-identifier--circle" aria-label="Wendy Wallace">WW</span>
```


<br>


## Background image

A background image can be applied to any style using the `--thumbnail` modifier.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class=" fd-identifier--xxs fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--xs fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--s fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--m fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--l fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--xl fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--xxl fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>


</div>
</div>

```html
<span class=" fd-identifier--xxs fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--xs fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--s fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--m fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--l fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--xl fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>
<span class=" fd-identifier--xxl fd-identifier--circle fd-identifier--thumbnail" style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg')" role="presentation" aria-label="John Doe"></span>


```


<br>



## Transparent

A transparent style can be rendered using the `--transparent` modifier.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class=" fd-identifier--xxs fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--xs fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--s fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--m fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--l fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--xl fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--xxl fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>

<span class=" fd-identifier--xxs fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xs fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--s fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--m fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--l fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xl fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xxl fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
</div>
</div>

```html
<span class=" fd-identifier--xxs fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--xs fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--s fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--m fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--l fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--xl fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>
<span class=" fd-identifier--xxl fd-identifier--circle fd-identifier--transparent sap-icon--money-bills" role="presentation"></span>

<span class=" fd-identifier--xxs fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xs fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--s fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--m fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--l fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xl fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
<span class=" fd-identifier--xxl fd-identifier--circle fd-identifier--transparent" aria-label="Wendy Wallace">WW</span>
```


<br>

## Accent Colors
Use helpers classes to change the background colors, for example, `.fd-has-background-color-accent-9`.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-1" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-2" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-3" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-4" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-5" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-6" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-7" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-8" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-9" role="presentation"></span>
</div>
</div>

```html
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-1" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-2" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-3" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-4" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-5" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-6" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-7" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-8" role="presentation"></span>
<span class=" fd-identifier--m sap-icon--money-bills fd-has-background-color-accent-9" role="presentation"></span>
```


