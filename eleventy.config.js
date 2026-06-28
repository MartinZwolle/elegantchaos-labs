export default function(eleventyConfig) {
  eleventyConfig.addFilter("dateToRfc822", (date) => {
    return new Date(date).toUTCString();
  });
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addFilter("readableDate", function(dateObj) {
  return dateObj.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
});

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}