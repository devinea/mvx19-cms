---
templateKey: design-guideline-post
title: Button
featuredImage: /img/control-button.png
date: 2019-01-11T00:15:32.894Z
description: >-
  Buttons allow users to trigger an action – either by clicking on or tapping
  the button, or by pressing certain keys such as Enter or the space bar.   
tags:
  - Button
  - design Button
  - SAP Fiori
iscontrol: true
version: '1.01'
leftnavorder:
  l1: '4'
  l2: '2'
  l3: '0'
  l4: '0'
---
![lol alt](/img/apple-touch-icon.png "hi"){ display: block; margin-left: auto; margin-right: auto; center;}

# Intro

Buttons allow users to trigger an action – either by clicking on or tapping the button, or by pressing certain keys such as Enter or the space bar. 

# Usage

### Standard Buttons

Use buttons for typical actions, such as:

* Create, Edit, Save
* Approve, Reject
* Accept, Decline
* OK, Cancel

The different button styles are designed to give the appropriate feedback to users. Don’t use them for decoration purposes.

![Toolbar Button Belize](/img/toolbarbuttons1-Belize.png "Toolbar Button Belize")

### Segmented Buttons

If you want the user to select one option from a small group, offer a segmented button in the toolbar or footer toolbar. For example:

* Year, Month, Day
* Small, Medium, Large

![Segmented Toolbar Button Belize](/img/SegmentedButton_Toolbar-Belize.png "Segmented Toolbar Button Belize")

Segmented button in a toolbar

### Toggle Buttons

Use toggle buttons in a toolbar or footer toolbar to activate or deactivate an object or element. You can also use toggle buttons to switch between different states.

## Responsiveness and Adaptiveness

The buttons themselves are not responsive. The button text and position depend on the settings for the parent container. In a responsive container or control, the button text may become truncated, or the button may move to another position.

All three button types support the cozy and compact form factors. The compact form factor is used for apps running on a mouse and keyboard-operated device. For more information, check out the article on [content density](https://experience.sap.com/fiori-design-web/cozy-compact/).

## Types

| Standard Button                                           | Toggle Button                                                                                                                                                                                             | Segmented Button                                                                                                                                                                               |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                           |                                                                                                                                                                                                           |                                                                                                                                                                                                |
| Clicking or tapping a standard button triggers an action. | Clicking or tapping a toggle button changes its state to “pressed”. The button returns to its initial state when the user clicks or taps it again. The toggle button is comparable to a checkbox control. | A segmented button shows a group of options. When the user clicks or taps one of the options, it stays in a pressed state. The segmented button is comparable to a radio button group control. |

## Components

A button can contain an icon or a text. For more information about icons, check out the article on iconography.

### Behavior and Interaction

Buttons can be enabled or disabled.

* Enabled buttons can be clicked or tapped. They also have “hover” and “pressed” states that give feedback to the user.
* Disabled buttons are shown as inactive and cannot be clicked or tapped.
  ![Button Behavior](/img/Button_Behavior.png "Button Behavior")

## Styles

### Standard Buttons

The appearance of a button can change depending on where it’s used (for example, in a toolbar, footer toolbar, popup, or dialog box).

Default
Default
Back
Back
Transparent
Transparent
Positive (property: type = accept)
Positive (property: type = accept)
Negative (property: type = reject)
Negative (property: type = reject)
Emphasized
Emphasized
Toggle Buttons
Default
Default
Transparent
Transparent
Segmented Buttons
No special styles apply to segmented buttons. As a result, they look almost the same as the default style for standard buttons.

## Guidelines

* Don’t combine an icon and text within one button.
* Choose a button text that is short and meaningful.
* Use imperative verbs for all actions; for example: Save, Cancel, Edit.
* Keep in mind that the text can be up to 300% longer in other languages.
* We don’t recommend using tooltips since they are only visible on desktop devices. However, you can use tooltips for icon buttons.
* For icon buttons, make sure the default accessibility text for the icon is correct for your use case. If not, define app-specific accessibility text.
* If an action button is temporarily inactive, use the disabled status.
* If you need to show the number of items that will be affected by the action of the button, you can add the number in brackets. For example, Edit (3).

## Exceptions

### Segmented Button

By default, the control for segmented buttons calculates the button width and applies it to all buttons within the group. You can change this by setting the width for individual buttons.

## Resources

Want to dive deeper? Follow the links below to find out more about related controls, the SAPUI5 implementation, and the visual design.
