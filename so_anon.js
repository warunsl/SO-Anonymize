// Meat of the script
console.log("Hiding user info");

$('.user-gravatar32').remove();
$('.user-details').remove();
$('.comment-body > a').removeAttr('title');
$('.comment-body > a').attr('href', '#');

console.log("Anonymous mode enabled!");
