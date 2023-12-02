module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css');
  
    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');
  };

  module.exports = function(eleventyConfig) {
    // Copy the `images/` directory
    eleventyConfig.addPassthroughCopy('images');
  // Watch the `images` directory for changes
  eleventyConfig.addWatchTarget('images');
    
  };

  module.exports = function(eleventyConfig) {
    // Copy the `favicon` directory
    eleventyConfig.addPassthroughCopy('favicon');
  // Watch the `favicon` directory for changes
  eleventyConfig.addWatchTarget('favicon');
    
  };

  module.exports = function(eleventyConfig) {
    // Copy the `favicon` directory
    eleventyConfig.addPassthroughCopy('pages');
  // Watch the `favicon` directory for changes
  eleventyConfig.addWatchTarget('pages');
    
  };

  module.exports = function(eleventyConfig) {
    // Copy the `favicon` directory
    eleventyConfig.addPassthroughCopy('');
  // Watch the `favicon` directory for changes
  eleventyConfig.addWatchTarget('pages');
    
  };};