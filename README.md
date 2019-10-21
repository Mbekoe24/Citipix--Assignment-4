# CitiPix

## Description

Our client, _CitiPix_ requires us to develop a website that gives the user the option to select a city from a predetermined list of options and displays a background image of the skyline of the selected city.

The supported cities are:

- New York City
- Austin
- Los Angeles
- San Francisco
- Sydney

## User Stories

```
Given that the user is on a web browser
When the user navigates to the CitiPix homepage
Then they will see the CitiPix branding
And they will see a dropdown with the text "Select A City"
And they will see the default background image.
```

```
Given that the user has navigated to the Citipix homepage
When the user clicks on the dropdown
Then they will see the option "New York City"
And they will see the option "Austin"
And they will see the option "Los Angeles"
And they will see the option "San Francisco"
And they will see the option "Sydney"
```

```
Given that the user has navigated to the Citipix homepage
And the user has clicked on the dropdown
When the user clicks on an option
Then the dropdown will display the selected option.
And the background image will show an image of the selected city.
```
