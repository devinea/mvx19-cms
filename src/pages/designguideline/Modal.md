---
templateKey: design-guideline-post
title: Modal
description: The modal is a container generally displayed in response to an action.
date: 2019-01-28T16:57:45.235Z
tags:
  - modal
--- 

 
It is used for short forms, confirmation messages or to display contextual information that does not require a page. The modal should always be used in conjunction with the [Application Layout Containers](/layouts/application-layout.html#application-with-ui-overlay). See an example [App layout page with Modal](/demo-pages/modal-overlay-demo-page.html)

<br>  


## Informational Modal
This is used to present information to the user but the Alert Component doesn’t fit all the information.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Product Added</h1>
            <button class="fd-button--light fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
            <b>Thew new product have been added to your catalog.</b><br/>
            <br/>
            Automatic Product ID: <b>PD-3465334</b><br/>
            <br/>
            Expiration date: <b>13/03/2018</b><br/>
            <br/>
        </div>
    </div>
</div>
</div>
</div>
</div>

```html
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Product Added</h1>
            <button class="fd-button--light fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
            <b>Thew new product have been added to your catalog.</b><br/>
            <br/>
            Automatic Product ID: <b>PD-3465334</b><br/>
            <br/>
            Expiration date: <b>13/03/2018</b><br/>
            <br/>
        </div>
    </div>
</div>
</div>
```




<br/>

## Confirmation Modal
This is used to confirm with the user before continuing with a destructive or complex action. In this case, the modal has action buttons at the bottom.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Delete</h1>
            <button class="fd-button--light fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
            Do you want to delete item <b>X</b>?
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button">Yes</button>
                <button class="fd-button--light">No</button>
            </div>
        </footer>
    </div>
</div>
</div>
</div>
</div>

```html
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Delete</h1>
            <button class="fd-button--light fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
            Do you want to delete item <b>X</b>?
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button">Yes</button>
                <button class="fd-button--light">No</button>
            </div>
        </footer>
    </div>
</div>
</div>
```




<br />

## Form Modal
This is used for short forms in order to collect information from the user.


<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Invite user</h1>
            <button class="fd-button--light fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
            <div class="fd-form__group">
                <div class="fd-form__item">
                    <label class="fd-form__label" aria-required="true" for="input-2">Email*</label>
                    <input class="fd-form__control" type="text" id="input-2">
                </div>
            </div>
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button">Invite</button>
                <button class="fd-button--light">Cancel</button>
            </div>
        </footer>
    </div>
</div>
</div>
</div>
</div>

```html
<div class="modal-demo-bg">
<div class="fd-modal">
    <div class="fd-modal__content" role="document">
        <div class="fd-modal__header">
            <h1 class="fd-modal__title">Invite user</h1>
            <button class="fd-button--light fd-modal__close" aria-label="close"></button>
        </div>
        <div class="fd-modal__body">
            <div class="fd-form__group">
                <div class="fd-form__item">
                    <label class="fd-form__label" aria-required="true" for="input-2">Email*</label>
                    <input class="fd-form__control" type="text" id="input-2">
                </div>
            </div>
        </div>
        <footer class="fd-modal__footer">
            <div class="fd-modal__actions">
                <button class="fd-button">Invite</button>
                <button class="fd-button--light">Cancel</button>
            </div>
        </footer>
    </div>
</div>
</div>
```



