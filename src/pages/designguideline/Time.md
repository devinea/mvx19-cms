---
templateKey: design-guideline-post
title: Time
description: The time component is used to select a time value.
date: 2019-01-28T16:57:45.261Z
tags:
  - time
--- 

 

Multiple instances can be used in the `time-picker` to choose hours, minutes, seconds and period of the day. It will be rare to see this component used alone.

<br>

## With Values


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-time">
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase hours" aria-controls="1610C873"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="hh" value="02"
          id="1610C873" aria-label="Hours"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease hours" aria-controls="1610C873"></button>
      </div>
  </div>

  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase minutes" aria-controls="DDlHR199"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="mm" value="34" id="DDlHR199"
          aria-label="Minutes"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease minutes" aria-controls="DDlHR199"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase seconds" aria-controls="8CAnL947"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="ss" value="56" id="8CAnL947"
          aria-label="Seconds"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease seconds" aria-controls="8CAnL947"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase period" aria-controls="sEWOL676"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="am" value="pm" id="sEWOL676"
          aria-label="Period"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease period" aria-controls="sEWOL676"></button>
      </div>
  </div>
</div>
</div>
</div>

```html
<div class="fd-time">
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase hours" aria-controls="1610C873"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="hh" value="02"
          id="1610C873" aria-label="Hours"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease hours" aria-controls="1610C873"></button>
      </div>
  </div>

  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase minutes" aria-controls="DDlHR199"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="mm" value="34" id="DDlHR199"
          aria-label="Minutes"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease minutes" aria-controls="DDlHR199"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase seconds" aria-controls="8CAnL947"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="ss" value="56" id="8CAnL947"
          aria-label="Seconds"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease seconds" aria-controls="8CAnL947"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase period" aria-controls="sEWOL676"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="am" value="pm" id="sEWOL676"
          aria-label="Period"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease period" aria-controls="sEWOL676"></button>
      </div>
  </div>
</div>
```




## With Placeholder


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-time">
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase hours" aria-controls="HgDLk176"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="hh" value="" id="HgDLk176"
          aria-label="Hours"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease hours" aria-controls="HgDLk176"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase minutes" aria-controls="CHeFH472"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="mm" value="" id="CHeFH472"
          aria-label="Minutes"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease minutes" aria-controls="CHeFH472"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase seconds" aria-controls="qMPpb855"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="ss" value="" id="qMPpb855"
          aria-label="Seconds"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease seconds" aria-controls="qMPpb855"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase period" aria-controls="VpUG6928"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="am" value="" id="VpUG6928"
          aria-label="Period"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease period" aria-controls="VpUG6928"></button>
      </div>
  </div>
</div>
</div>
</div>

```html
<div class="fd-time">
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase hours" aria-controls="HgDLk176"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="hh" value="" id="HgDLk176"
          aria-label="Hours"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease hours" aria-controls="HgDLk176"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase minutes" aria-controls="CHeFH472"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="mm" value="" id="CHeFH472"
          aria-label="Minutes"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease minutes" aria-controls="CHeFH472"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase seconds" aria-controls="qMPpb855"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="ss" value="" id="qMPpb855"
          aria-label="Seconds"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease seconds" aria-controls="qMPpb855"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase period" aria-controls="VpUG6928"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="am" value="" id="VpUG6928"
          aria-label="Period"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease period" aria-controls="VpUG6928"></button>
      </div>
  </div>
</div>
```




## With Button State
Since the controls and inputs are standard components, they can take all states available to
buttons and forms respectively, e.g., disabled, .is-invalid. In this case, the buttons are
disabled when the first or last values are reached.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="fd-time">
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase hours" aria-controls="Rjap5115"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="hh" value="00" id="Rjap5115"
          aria-label="Hours"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow is-disabled"
          aria-label="Decrease hours" aria-controls="Rjap5115"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow is-disabled"
          aria-label="Increase minutes" aria-controls="VnVPz732"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="mm" value="59" id="VnVPz732"
          aria-label="Minutes"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease minutes" aria-controls="VnVPz732"></button>
      </div>
  </div>
</div>
</div>
</div>

```html
<div class="fd-time">
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow"
          aria-label="Increase hours" aria-controls="Rjap5115"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="hh" value="00" id="Rjap5115"
          aria-label="Hours"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow is-disabled"
          aria-label="Decrease hours" aria-controls="Rjap5115"></button>
      </div>
  </div>
  <div class="fd-time__item">
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-up-arrow is-disabled"
          aria-label="Increase minutes" aria-controls="VnVPz732"></button>
      </div>
      <div class="fd-time__input">
          <input class="fd-form__control" type="text" placeholder="mm" value="59" id="VnVPz732"
          aria-label="Minutes"/>
      </div>
      <div class="fd-time__control">
          <button class="fd-button--light fd-button--xs sap-icon--navigation-down-arrow"
          aria-label="Decrease minutes" aria-controls="VnVPz732"></button>
      </div>
  </div>
</div>
```



