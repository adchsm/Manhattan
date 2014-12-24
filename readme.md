# Manhattan

Manhattan is a clean, lightweight and customisable CSS grid.

Named after the greatest grid system in the world, Manhattan is a modern and easy to use CSS grid. It uses it's own data-attribute `mhtn` keeping your class markup clean.

It offers three containers, the default restricts content on screens over a specified width, whereas flex and edge allow you to maximize any screen width.

Manhattan doesn't use a traditional 12 column layout, but instead opts for straight forward percentages. There are five break points for total control over your layout, where you can specify a width for each column at each screen size.

Manhattan supports all modern browsers and most older ones, including IE 8 with the help of a media query polyfill. It is also validated by the [W3C CSS Jigsaw Service](http://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fwww.adchsm.me%2Fmanhattan%2Fmanhattan.css&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en).

### Why?

There is no shortage of CSS grids available and with so many frameworks offering everything you need, it can be hard to know which use, if any.

Pre-styled and assembled from components, I see too many websites lacking creativity and imagination. Although a grid isn't necessary either, it can be a useful tool for speeding up development without interrupting your website's personality.

I struggled to find a flexible grid without a heavy footprint, so I created Manhattan. It's ultra light, weighing in at 2.8 kb minified/658 bytes gzipped and released under the MIT license, free to use and abuse.

Enjoy

## Usage

Examples and usage instructions will be coming soon, so for now here is the basic markup.

``` html
<div mhtn="container"><!-- Can use "container flex" or "container edge" -->

  <div mhtn="row">
    <div mhtn="col xs-100 sm-80 md-75 lg-70 xl-66"></div>
    <div mhtn="col xs-100 sm-20 md-25 lg-30 xl-33"></div>
  </div>
  
  <div mhtn="row">
    <div mhtn="col xs-100"></div>
  </div>
  
</div>
```

## Todo & Possible Future Features

* Bug test
* Release the first stable version
* Create Sass version
* Column alignments
* WordPress plugin

## How to Contribute Using GitHub

### Raising Issues

If you've found an issue that's great, I'd like to hear as I'm always looking to improve the grid.

Please provide as much information about the bug as possible. Include a url which demonstrates the issue, or if you don't want to publicly reveal your url, create a [JSFiddle](http://jsfiddle.net/). Alternatively you can [email me](mailto:adam@adchsm.me) for support.

### Pull Requests

Pull request are welcome, please make sure your modifications are to the development version of Manhattan, and they are extremely well tested!