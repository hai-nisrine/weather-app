# Weather App

A simple weather application built with vanilla JavaScript that allows users to search for a city and view its current weather conditions using the Open-Meteo APIs.

## Features

* Search for weather by city name
* Display current temperature
* Display apparent ("feels like") temperature
* Show a weather description based on the weather code
* Automatically switch between day and night themes
* Remember the last searched city using `localStorage`

## Technologies Used

* HTML
* CSS
* JavaScript
* Open-Meteo Geocoding API
* Open-Meteo Weather Forecast API

## How It Works

1. Enter the name of a city.
2. The app uses the Open-Meteo Geocoding API to find the city's coordinates.
3. It then requests the current weather for those coordinates.
4. The weather information is displayed on the page.
5. The last searched city is saved in `localStorage` and is automatically loaded the next time the page is opened.

## What I Practiced

This project was built as a JavaScript checkpoint to practice:

* Variables, functions, and conditionals
* Arrays and objects
* DOM selection and manipulation
* Event listeners
* Fetching data from external APIs
* Updating CSS classes dynamically
* Using `localStorage` to persist data

## APIs

* Open-Meteo Geocoding API
* Open-Meteo Forecast API

