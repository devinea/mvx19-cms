---
templateKey: design-guideline-post
title: Time Picker
description: Timepicker is a component composed of an `input-group`, a `popover` and the `time` component to create a time selection interaction.
date: 2019-01-28T16:57:45.254Z
tags:
  - time picker
--- 

 

<br>


## Basic Time Picker

A basic example of a time picker.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">

<div class="fd-time-picker">
    <div class="fd-popover fd-popover--no-arrow">
        <div class="fd-popover__control">
            <div class="fd-input-group fd-input-group--after">
                <input type="time" class="fd-input " id="" placeholder="hh:mm am/pm">
                <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button ">
                                  <button class=" fd-button--light sap-icon--history fd-popover__control" aria-controls="rthHR811" aria-expanded="false" aria-haspopup="true"></button>

                      </span>
            </div>
        </div>

        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHR811">

            <div class="fd-time">

                <div class="fd-time__item">
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light sap-icon--navigation-up-arrow" aria-label="Increase hours" aria-controls="BW7dC141"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="hh" value="" id="BW7dC141" aria-label="Hours">
                    </div>
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease hours" aria-controls="BW7dC141"></button>
                    </div>
                </div>

                <div class="fd-time__item">
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase minutes" aria-controls="VyQHq609"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="mm" value="" id="VyQHq609" aria-label="Minutes">
                    </div>
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease minutes" aria-controls="VyQHq609"></button>
                    </div>
                </div>

                <div class="fd-time__item">
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase seconds" aria-controls="Tbwlb978"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="ss" value="" id="Tbwlb978" aria-label="Seconds">
                    </div>
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease seconds" aria-controls="Tbwlb978"></button>
                    </div>
                </div>

                <div class="fd-time__item">
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase period" aria-controls="UxXMT681"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="am" value="" id="UxXMT681" aria-label="Period">
                    </div>
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease period" aria-controls="UxXMT681"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<br>

<div class="fd-time-picker">
    <div class="fd-popover fd-popover--no-arrow">
        <div class="fd-popover__control">
            <div class="fd-input-group fd-input-group--after fd-input-group--compact">
                <input type="time" class="fd-input  fd-input--compact" id="" placeholder="hh:mm am/pm">
                <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button ">
                                  <button class=" fd-button--light fd-button--compact sap-icon--history fd-popover__control" aria-controls="bJuyJ846" aria-expanded="false" aria-haspopup="true"></button>
                      </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="bJuyJ846">
            <div class="fd-time">
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase hours" aria-controls="BW7dC141"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="hh" value="" id="BW7dC141" aria-label="Hours">
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease hours" aria-controls="BW7dC141"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase minutes" aria-controls="VyQHq609"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="mm" value="" id="VyQHq609" aria-label="Minutes">
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease minutes" aria-controls="VyQHq609"></button>
                    </div>
                </div>

                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase seconds" aria-controls="Tbwlb978"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="ss" value="" id="Tbwlb978" aria-label="Seconds">
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease seconds" aria-controls="Tbwlb978"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase period" aria-controls="UxXMT681"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="am" value="" id="UxXMT681" aria-label="Period">
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease period" aria-controls="UxXMT681"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>
</div>

```html

<div class="fd-time-picker">
    <div class="fd-popover fd-popover--no-arrow">
        <div class="fd-popover__control">
            <div class="fd-input-group fd-input-group--after">
                <input type="time" class="fd-input " id="" placeholder="hh:mm am/pm">
                <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button ">
                                  <button class=" fd-button--light sap-icon--history fd-popover__control" aria-controls="rthHR811" aria-expanded="false" aria-haspopup="true"></button>

                      </span>
            </div>
        </div>

        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="rthHR811">

            <div class="fd-time">

                <div class="fd-time__item">
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light sap-icon--navigation-up-arrow" aria-label="Increase hours" aria-controls="BW7dC141"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="hh" value="" id="BW7dC141" aria-label="Hours">
                    </div>
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease hours" aria-controls="BW7dC141"></button>
                    </div>
                </div>

                <div class="fd-time__item">
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase minutes" aria-controls="VyQHq609"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="mm" value="" id="VyQHq609" aria-label="Minutes">
                    </div>
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease minutes" aria-controls="VyQHq609"></button>
                    </div>
                </div>

                <div class="fd-time__item">
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase seconds" aria-controls="Tbwlb978"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="ss" value="" id="Tbwlb978" aria-label="Seconds">
                    </div>
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease seconds" aria-controls="Tbwlb978"></button>
                    </div>
                </div>

                <div class="fd-time__item">
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase period" aria-controls="UxXMT681"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="am" value="" id="UxXMT681" aria-label="Period">
                    </div>
                    <div class="fd-time__control">

                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease period" aria-controls="UxXMT681"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<br>

<div class="fd-time-picker">
    <div class="fd-popover fd-popover--no-arrow">
        <div class="fd-popover__control">
            <div class="fd-input-group fd-input-group--after fd-input-group--compact">
                <input type="time" class="fd-input  fd-input--compact" id="" placeholder="hh:mm am/pm">
                <span class="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button ">
                                  <button class=" fd-button--light fd-button--compact sap-icon--history fd-popover__control" aria-controls="bJuyJ846" aria-expanded="false" aria-haspopup="true"></button>
                      </span>
            </div>
        </div>
        <div class="fd-popover__body fd-popover__body--no-arrow" aria-hidden="true" id="bJuyJ846">
            <div class="fd-time">
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase hours" aria-controls="BW7dC141"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="hh" value="" id="BW7dC141" aria-label="Hours">
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease hours" aria-controls="BW7dC141"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase minutes" aria-controls="VyQHq609"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="mm" value="" id="VyQHq609" aria-label="Minutes">
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease minutes" aria-controls="VyQHq609"></button>
                    </div>
                </div>

                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase seconds" aria-controls="Tbwlb978"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="ss" value="" id="Tbwlb978" aria-label="Seconds">
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease seconds" aria-controls="Tbwlb978"></button>
                    </div>
                </div>
                <div class="fd-time__item">
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-up-arrow" aria-label="Increase period" aria-controls="UxXMT681"></button>
                    </div>
                    <div class="fd-time__input">
                        <input class="fd-form__control" type="text" placeholder="am" value="" id="UxXMT681" aria-label="Period">
                    </div>
                    <div class="fd-time__control">
                        <button class=" fd-button--standard fd-button--light fd-button--compact sap-icon--navigation-down-arrow" aria-label="Decrease period" aria-controls="UxXMT681"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
```



