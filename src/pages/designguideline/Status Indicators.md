---
templateKey: design-guideline-post
title: Status Indicators
description: Status indicators are used to easily highlight the state of an object. `badge`, `label`, `status-label` and `counter`
date: 2019-01-28T16:57:45.259Z
tags:
  - status indicators
--- 

 

<br>

# Badge


## Badge Style Options
`badge` Status Indicator has three options: `default`, `--pill` and `--filled`

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="fd-badge">Default</span>
<span class="fd-badge fd-badge--pill"> Default </span>
<span class="fd-badge fd-badge--filled">Default</span>


</div>
</div>

```html
<span class="fd-badge">Default</span>
<span class="fd-badge fd-badge--pill"> Default </span>
<span class="fd-badge fd-badge--filled">Default</span>


```



<br>

### Badge Color Options
In addition the the default grey, there are three additional Semantic color options available: `--success`, `--warning` and `-error`

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="fd-badge fd-badge--success">Default</span>
<span class="fd-badge fd-badge--warning">Default</span>
<span class="fd-badge fd-badge--error">Default</span>
<br><br>
<span class="fd-badge fd-badge--success fd-badge--pill">Default</span>
<span class="fd-badge fd-badge--warning fd-badge--pill">Default</span>
<span class="fd-badge fd-badge--error fd-badge--pill">Default</span>
<br><br>
<span class="fd-badge fd-badge--success fd-badge--filled">Default</span>
<span class="fd-badge fd-badge--warning fd-badge--filled">Default</span>
<span class="fd-badge fd-badge--error fd-badge--filled">Default</span>

</div>
</div>

```html
<span class="fd-badge fd-badge--success">Default</span>
<span class="fd-badge fd-badge--warning">Default</span>
<span class="fd-badge fd-badge--error">Default</span>
<br><br>
<span class="fd-badge fd-badge--success fd-badge--pill">Default</span>
<span class="fd-badge fd-badge--warning fd-badge--pill">Default</span>
<span class="fd-badge fd-badge--error fd-badge--pill">Default</span>
<br><br>
<span class="fd-badge fd-badge--success fd-badge--filled">Default</span>
<span class="fd-badge fd-badge--warning fd-badge--filled">Default</span>
<span class="fd-badge fd-badge--error fd-badge--filled">Default</span>

```



<hr>

# Label

A `label` is similar to the `badge` status Indicator, but it does not have have any borders or background color. Color options of default grey, `--success`, `--warning` and `--error` are available.

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="fd-label">Default</span>
<span class="fd-label fd-label--success">Success</span>
<span class="fd-label fd-label--warning">Warning</span>
<span class="fd-label fd-label--error">Error</span>
</div>
</div>

```html
<span class="fd-label">Default</span>
<span class="fd-label fd-label--success">Success</span>
<span class="fd-label fd-label--warning">Warning</span>
<span class="fd-label fd-label--error">Error</span>
```



<hr>

# Status Indicator Label

## Status Indicator Label with build in status icons


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="fd-status-label fd-status-label--available">Available</span>
<span class="fd-status-label fd-status-label--away">Away</span>
<span class="fd-status-label fd-status-label--busy">Busy</span>
<span class="fd-status-label fd-status-label--offline">Appear Offline</span>
</div>
</div>

```html
<span class="fd-status-label fd-status-label--available">Available</span>
<span class="fd-status-label fd-status-label--away">Away</span>
<span class="fd-status-label fd-status-label--busy">Busy</span>
<span class="fd-status-label fd-status-label--offline">Appear Offline</span>
```



<br>

## Status Indicator Label with any icons


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="fd-status-label sap-icon--history">Custom Icon</span>
<span class="fd-status-label sap-icon--message-success">Success</span>
<span class="fd-status-label sap-icon--message-warning">Warning</span>
<span class="fd-status-label sap-icon--message-error">Error</span>
</div>
</div>

```html
<span class="fd-status-label sap-icon--history">Custom Icon</span>
<span class="fd-status-label sap-icon--message-success">Success</span>
<span class="fd-status-label sap-icon--message-warning">Warning</span>
<span class="fd-status-label sap-icon--message-error">Error</span>
```



<br>

## Status Indicator Label with Semantic colors


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="fd-status-label">Default</span>
<span class="fd-status-label fd-status-label--success">Success</span>
<span class="fd-status-label fd-status-label--warning">Warning</span>
<span class="fd-status-label fd-status-label--error">Error</span>
</div>
</div>

```html
<span class="fd-status-label">Default</span>
<span class="fd-status-label fd-status-label--success">Success</span>
<span class="fd-status-label fd-status-label--warning">Warning</span>
<span class="fd-status-label fd-status-label--error">Error</span>
```




<hr>

# Counter

## Default Counter
Counter has a minimum value 1. Maximum display is 999+

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
</div>
</div>

```html
<span class="fd-counter" aria-label="Unread count">5</span>
<span class="fd-counter" aria-label="Unread count">25</span>
<span class="fd-counter" aria-label="Unread count">101</span>
<span class="fd-counter" aria-label="Unread count">999+</span>
```



<br>

## Counter inline with a paragraph

<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
</div>
</div>

```html
<p>Lorem ipsum <span class="fd-counter" aria-label="Unread count">5</span> </p>
```



<br>

## Counter with Tabs


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<ul class="fd-tabs" role="tablist">
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="AvcVC566" href="#AvcVC566" role="tab">Link
      <span class="fd-counter" aria-label="Unread count">25</span></a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="5mxO9110" aria-selected="true" href="#5mxO9110"
      role="tab">Selected</a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="r0pk3445" href="#r0pk3445" role="tab">Link</a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="Dj1Ri832" aria-disabled="true"
      role="tab">Disabled</a>
   </li>
</ul>
</div>
</div>

```html
<ul class="fd-tabs" role="tablist">
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="AvcVC566" href="#AvcVC566" role="tab">Link
      <span class="fd-counter" aria-label="Unread count">25</span></a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="5mxO9110" aria-selected="true" href="#5mxO9110"
      role="tab">Selected</a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="r0pk3445" href="#r0pk3445" role="tab">Link</a>
   </li>
   <li class="fd-tabs__item">
      <a class="fd-tabs__link" aria-controls="Dj1Ri832" aria-disabled="true"
      role="tab">Disabled</a>
   </li>
</ul>
```



<br>

## Counter with `--notification` modifier


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">1</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">20</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">300</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">999+</span>
</button>

</div>
</div>

```html
<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">1</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">20</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">300</span>
</button>

<button class="fd-button--light sap-icon--bell" aria-label="Notifications">
    <span class="fd-counter fd-counter--notification" aria-label="Unread count">999+</span>
</button>

```



<br>




<style>
.fd-badge, .fd-label, .fd-status-label {
    margin-right: 20px;
}
</style>
