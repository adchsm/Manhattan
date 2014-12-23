# Manhattan

Manhattan is a clean, lightweight and customisable CSS grid.

Manhattan uses it's own data attributes to keep your class markup clean. It features three different containers for constrained, flexible and edge-to-edge layouts. Manhattan doesn't use a traditional 12 column layout, but instead opts for straight forward percentages. It's also equipped with five optional breakpoints for total control over your layout. It's lightweight at 2896 bytes minified and 589 bytes gzipped.

Examples and usage instructions will be coming soon properly on a Manhattan website, so for now here are the basic markup.

``` html
<div mhtn="container"><!-- Can use "container flex" or "container edge" -->
  <div mhtn="row">
    <div mhtn="col xs-100 sm-80 md-75 lg-70 xl-66"></div>
    <div mhtn="col xs-100 sm-20 md-25 lg-30 xl-33"></div>
  </div>
</div>
```

Manhattan should be compatible with nearly all browsers, including IE8 with the help of a media query polyfill. However, if you do run into any errors using it, please let me know.

## Todo & Possible Future Features
* Bug test
* Release the first stable version
* Create Sass version
* Column alignments
* WordPress plugin

## How to Contribute to Manhattan Using GitHub

### Raising Issues

Please don't post feature requests here, that's not an issue. Instead [email me](mailto:adam@adchsm.me) your ideas.

If you've found an issue that's great, I'd like to hear as I'm always looking to improve the grid.

Please provide as much information about the bug as possible. Include a url which demonstrates the issue, or if you don't want to publicly reveal your url, create a [JSFiddle](http://jsfiddle.net/). Alternatively you can [email me](mailto:adam@adchsm.me) for support.

### Pull Requests

Pull request are welcome, please make sure your modifications are to the development version of Manhattan, and they are extremely well tested!