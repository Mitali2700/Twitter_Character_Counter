var tweet = prompt("Compose your tweet: ");
var tweetCount= tweet.length;
alert("You have written "+ tweetCount + "characters, you have " +(140-tweetCount)+" Characters remaining");
alert("You have written "+ tweet.slice(tweet,140));