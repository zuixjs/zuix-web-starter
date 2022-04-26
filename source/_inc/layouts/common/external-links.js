function processExternalLinks(view) {
    // Force opening of all non-local links in a new window
    zuix.$(view).find('a[href*="://"]')
        .attr('target', '_blank')
        .attr('rel', 'noreferrer');
}
zuix.hook('view:process', function(view) {
    processExternalLinks(view);
});
processExternalLinks(document);
