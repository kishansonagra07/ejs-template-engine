const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get(['/','/index'], function(req, res) {
    const content = [
        { name: 'Heading 1', description: "This is absolutely dynamic content.\n\nDonec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui." },
        { name: 'Heading 2', description: "This is absolutely dynamic again.\n\nDonec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui." },
        { name: 'HEading 3', description: "This is absolutely dynamic last time.\n\nDonec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui." }
    ];
    const tagline = "Welcome to EJS template engine..!";
    const page = "home"; // help you to active page class when have multiple pages in one ejs file
    res.render('pages/index',{content,tagline,page}); //using res.render for loading ejs (template engine)
    // you can also do like this {content:content , tagline:tagline}
});


app.get('/about', function(req, res) {
    const content = [
        { name: 'Hey there !!', description: "Its simple isn't it?" },
        { name: 'How Are You ??', description: "Yes quite simple..!" }
    ];
    const tagline = "Great !!! you are in another page called /about";
    const page = "about";
    res.render('pages/about',{content,tagline,page});
});

app.listen(3000);
console.log('Server is running on port 3000');