# React-YouTube

## Project Description.
This is a YouTube browser application built in React.

It makes a request over to the YouTube API. It does a search for a list of videos matching a search term, and show the videos on the right hand side of the screen.

## Features
A user can then click on one of these videos and can click on a play button and play the video. It will also show them a title and a description of the video.

## Getting Started

Ensure that you have [npm](https://docs.npmjs.com/cli/install) installed on your machine.

### installation
Clone this repository to your local disk:
```
git clone https://github.com/fiveache/React-YouTube.git
```
change into directory `React-YouTube`
```
cd React-YouTube
```
Install all Dependencies (using `npm install` command).
```
npm install
```
Change the filename of `.keys.js` to `keys.js` in the `src` directory of the project.
```
cd src && mv .keys.js keys.js
```
Update the value of `YouTube` in your `keys.js` file using an API key from [YouTube](https://developers.google.com/youtube/v3/getting-started):
```
YouTube: '<KEY>',
```
Boot up your server by running:
```
npm start
```

## Dependencies
- React
- Material-ui
- Axios
- Moment

## Screenshot

!["Desktop Screenshot"](https://github.com/fiveache/React-YouTube/blob/master/docs/screen.png?raw=true)
