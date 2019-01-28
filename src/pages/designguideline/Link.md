---
templateKey: design-guideline-post
title: Link
description: Used when extra emphasis is needed especially when a link needs to standout from the surrounding text.
date: 2019-01-28T16:57:45.225Z
tags:
  - link
--- 

 

<br>

## Link States
* Selected state can be rendered using class `is-selected` and/or `aria-selected="true"` attribute
* Disabled state can be rendered using class `is-disabled` and/or `aria-disabled="true"` attribute


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
Lorem ipsum <a href="#" class="fd-link">dolor sit amet consectetur <span class="sap-icon--cart"></span> </a> adipiscing elit.
</div>
</div>

```html
Lorem ipsum <a href="#" class="fd-link">dolor sit amet consectetur <span class="sap-icon--cart"></span> </a> adipiscing elit.
```


