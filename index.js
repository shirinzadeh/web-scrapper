const PORT = 3000;
import express from 'express';
import cheerio  from 'cheerio';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

const url = 'https://www.theguardian.com/uk/sport';
app.get('/results', (request, response) => {
    axios.get(url).then(res => {
        const data = res.data;
        const $ = cheerio.load(data);
        const articles = [];
        $('.fc-item__title', data).each(function() {
            const title = $(this).text();
            const link = $(this).find('a').attr('href');
            let articleObj = {
                title,
                link
            }
            articles.push(articleObj)
            
        })
        response.json(articles);
    }).catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`PORT ${PORT} is running`))