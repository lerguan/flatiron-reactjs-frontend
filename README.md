# Shopping for Home - A short list of properties to be purchased

## Introduction

While looking for potential real estate to purchase, there are so many properties on the market and it is easily losing track which ones are hits. It's necessary to pick up several properties that match our requirements and put them together to make a final list.

## Start Up the Server

All house data is stored in the db.json file. The data is accessed using a JSON server. Run `json-server --watch db.json` to start the server.

This will create a server storing all of the house data at `http://localhost:3000/houses`.

An individual house information can be found at `http://localhost:3000/houses/:id`. The `:id` is a variable value that indicates the path to a specific house.

## Instructions

### Fetch houses

When the page loads, the page shows `My Favorites` tab, which is the existing collection of favorite houses and the relative information of that house, including picture, address, built year, size, number of bedrooms and bathrooms, and price.

### Add new house to collection

On the top of the page, next to `My Favortee` tab, there is another tab, `Create New` where you can input house information and click Add House button to store new house information to the collection.

### Remove specific house from the collection

When click the `Remove` button under each house card, the house is deleted from the page as well as from the server.

### Find more information of specific house from the collection

When click the image of each house on My Favorite page, it redirects to the Additional Info page and show the link of the particular property that will direct to a google search results.

### Credit

The house information is from `Realtor.com`
