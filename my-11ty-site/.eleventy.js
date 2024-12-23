module.exports = function(eleventyConfig) {
    // Set the input and output directories
    eleventyConfig.addPassthroughCopy("src/assets");
    
    return {
        dir: {
            input: "src",
            output: "_site"
        },
        templateFormats: ["md", "html", "njk"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};