var targetDate = new Date('December 15 2017 12:00 AM');
window.onload = function () {
    UpdateClock();
    setInterval(UpdateClock, 500);
};
function UpdateClock() {
    var t = targetDate - Date.now();
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var seconds = Math.floor((t / 1000) % 60);
    var title = days + " Days "
    if (hours != 0 && hours != 1) {
        title = title + hours + " hours ";
    }
    if (hours == 1) {
        title = title + hours + " hour ";
    }
    title = title + "until Star Wars Episode VIII";

    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;
    document.title = title;

    buildTweetURL(title);
    buildFacebookURL(title);

}
function buildTweetURL(title) {
    var baseURL = "https://twitter.com/intent/tweet?text=";
    var encodedTitle = encodeURIComponent(title);
    var hashtags = "&hashtags=StarWarsVIII,StarWars";
    var tweetURL = "&url=" + encodeURIComponent(window.location.href);
    document.getElementById("TweetButton").href = baseURL + encodedTitle + hashtags + tweetURL;
}
function buildFacebookURL(title) {
    var baseURL = "https://www.facebook.com/dialog/feed?";
    var appID =   "app_id=";
    var link = "&link=" + encodeURIComponent(window.location.href);
    var picture = "&picture=http%3A%2F%2Fi.imgur.com%2F4P8Nu5y.jpg";
    var name = "&name=" + encodeURIComponent(title);
    var caption = "&caption=%20";
    var description = "&description=" + encodeURIComponent(title);
    var redirect_url = "&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F";
    document.getElementById("FacebookButton").href = baseURL + appID + link + picture + name + caption + description + redirect_url;
}

