var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articleone = {
        title:`Article 1|Abhijith Rajan`,
        heading:'Article 1',
        date:'Feb 19,2017',
        content:`
            <p>
                This is my first article
            </p>`
    };

var articles={
    'article-one':{
        title:'Article 1|Abhijith Rajan',
        heading:'Article 1',
        date:'Feb 19,2017',
        content:`
            <p>
                This is my first article
            </p>`
    },
    'article-two':{
        title:'Article 2|Abhijith Rajan',
        heading:'Article 2',
        date:'Feb 20,2017',
        content:`
            <p>
                This is my second article
            </p>`
    },
    'article-three':{
        title:'Article 3|Abhijith Rajan',
        heading:'Article 3',
        date:'Feb 21,2017',
        content:`
            <p>
                This is my third article
            </p>`
    }
};
app.get('/article-one', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articleone));
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(article-one));
});

function createTemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <link href="/ui/style.css" rel="stylesheet"/>
                <meta name="viewport" width="width-device-width, initial-scale=1" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>`;
    return htmlTemplate;
}           
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
