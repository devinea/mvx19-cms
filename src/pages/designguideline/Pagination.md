---
templateKey: design-guideline-post
title: Pagination
description: Pagination is commonly used for tables and tiles. It allows users to see how many pages of content exist, to navigate and highlights which page they are currently viewing.
date: 2019-01-28T16:57:45.234Z
tags:
  - pagination
--- 

 

<br>

## First Page
When the first page is active, the Back arrow should be disabled.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-pagination">
  <span class="fd-pagination__total">30 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="true"></a>
    <a href="#" class="fd-pagination__link" aria-selected="true">1</a>
    <a href="#" class="fd-pagination__link">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
</div>
</div>

```html
<div class="fd-pagination">
  <span class="fd-pagination__total">30 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="true"></a>
    <a href="#" class="fd-pagination__link" aria-selected="true">1</a>
    <a href="#" class="fd-pagination__link">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
```




<br>

## Second Page


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-pagination">
  <span class="fd-pagination__total">30 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
</div>
</div>

```html
<div class="fd-pagination">
  <span class="fd-pagination__total">30 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
```




<br>

## More than three Pages


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
</div>
</div>

```html
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">2</a>
    <a href="#" class="fd-pagination__link">3</a>
    <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
```




<br>

## In between more than three Pages


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">21</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">22</a>
    <a href="#" class="fd-pagination__link">23</a>
    <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
</div>
</div>

```html
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">21</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">22</a>
    <a href="#" class="fd-pagination__link">23</a>
    <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="false"></a>
  </nav>
</div>
```




<br>

## Last Page
On the last page, the Next arrow should be disabled.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">49</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="true"></a>
  </nav>
</div>
</div>
</div>

```html
<div class="fd-pagination">
  <span class="fd-pagination__total">500 items</span>
  <nav class="fd-pagination__nav">
    <a href="#" class="fd-pagination__link fd-pagination__link--previous" aria-label="Previous"
    aria-disabled="false"></a>
    <a href="#" class="fd-pagination__link">1</a>
    <span class="fd-pagination__link fd-pagination__link--more" role="presentation"></span>
    <a href="#" class="fd-pagination__link">49</a>
    <a href="#" class="fd-pagination__link" aria-selected="true">50</a>
    <a href="#" class="fd-pagination__link fd-pagination__link--next" aria-label="Next"
    aria-disabled="true"></a>
  </nav>
</div>
```



