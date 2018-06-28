## Overview

This is an example project that creates a POC of a React-based GridField, testing several APIs and simulating extension through modules.

## Installation
`$ git clone .... && composer install`

## Usage

Go to the "Test module" admin panel. It's a hacked ModelAdmin interface that renders a form through FormSchema that uses a gridfield to display a list of `Note` objects. (They will be created on `dev/build`).

### Core dev branches
* `open-sausages/silverstripe-admin: dev/experimental-gridfield`
* `open-sausages/silverstripe-framework: dev/experimental-gridfield`

## Components
* **example-module** Adds an example DataObject (`MyApp\TestModule\Note`), and creates a view for it in the `TestModule` section of the CMS
* **example-module-extension** Adds a field to the `MyApp\TestModule\Note` object (`Priority`) and adds that field to `$summary_fields`
* **gridfield-sorter** Is an example thirdparty module that offers a GridFieldComponent. The component, `SortingComponent` adds a dropdown field of all the object's fields above the gridfield and sorts the data.


