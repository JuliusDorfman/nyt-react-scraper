const request = require("request");


module.exports = {
    search: function(err, req, res) {
        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                'api-key': "2ae2956a39ee45d7b4e90bd66090c43e"
                // 'q': props.search.topic,
                // 'begin_date': props.search.begin_date,
                // 'end_date': props.search.end_date
            },
        }, function(err, response, body) {
            body = JSON.parse(body);
            console.log(body);
        })
    }
}