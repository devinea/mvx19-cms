---
templateKey: design-guideline-post
title: Image
description: An image is used to apply shapes to images.
date: 2019-01-28T16:57:45.214Z
tags:
  - image
--- 

 


<hr>

When using images, use the following helpers classes to adjust the size and the shape.


## Size and Shape

Size Options: `--s` 24x24, `--m` 36x36, `--l` 48x48

Shape Option: `--circle` will render a round image


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<span class="fd-image--s" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class="fd-image--m" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class="fd-image--l" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<br><br>

<span class=" fd-image--s fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class=" fd-image--m fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class=" fd-image--l fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>
</div>
</div>

```html
<span class="fd-image--s" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class="fd-image--m" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class="fd-image--l" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<br><br>

<span class=" fd-image--s fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class=" fd-image--m fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>

<span class=" fd-image--l fd-image--circle" aria-label="Image label"
style="background-image: url('{{site.baseurl}}/images/thumbs/headshot-male.jpg');"></span>
```



