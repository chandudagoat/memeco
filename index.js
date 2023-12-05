import * as dotenv from 'dotenv'
import express from 'express'
import axios from 'axios'
import cheerio from 'cheerio'

const app = express();
dotenv.config()

// lists to store memes in
var memes = []
var dankmemes = []
var programmingmemes = []
var darkmemes = []

app.get('/', (req, res) => {
    res.json("Welcome to MemeCo.");
})

app.get('/r', (req, res) => {
    res.json(["/r/memes", "/r/dankmemes", "/r/programmingmemes", "/r/darkmemes"])
})

app.get('/r/memes', (req, res) => {
    axios.get('https://reddit.com/r/memes')
        .then((response)=>{
            const html = response.data
            const $ = cheerio.load(html)

            $('div._3Oa0THmZ3f5iZXAQ0hBJ0k ', html).each(function() {
                var a = $(this)
                const img = a.find('img').attr('src')
                memes.push(img)
            })

            res.json(memes)
        })
        .catch((err) => console.log(err))
})

app.get('/r/dankmemes', (req, res) => {
    axios.get('https://reddit.com/r/dankmemes')
        .then((response)=>{
            const html = response.data
            const $ = cheerio.load(html)

            $('div._3Oa0THmZ3f5iZXAQ0hBJ0k ', html).each(function() {
                var a = $(this)
                const img = a.find('img').attr('src')
                dankmemes.push(img)
            })

            res.json(dankmemes)
        })
        .catch((err) => console.log(err))
})

app.get('/r/programmingmemes', (req, res) => {
    axios.get('https://reddit.com/r/programmingmemes')
        .then((response)=>{
            const html = response.data
            const $ = cheerio.load(html)

            $('div._3Oa0THmZ3f5iZXAQ0hBJ0k ', html).each(function() {
                var a = $(this)
                const img = a.find('img').attr('src')
                programmingmemes.push(img)
            })

            res.json(programmingmemes)
        })
        .catch((err) => console.log(err))
})

app.get('/r/darkmemes', (req, res) => {
    axios.get('https://reddit.com/r/Darkmemes4u')
        .then((response)=>{
            const html = response.data
            const $ = cheerio.load(html)

            $('div._3Oa0THmZ3f5iZXAQ0hBJ0k ', html).each(function() {
                var a = $(this)
                const img = a.find('img').attr('src')
                darkmemes.push(img)
            })

            res.json(darkmemes)
        })
        .catch((err) => console.log(err))
})

app.listen(process.env.PORT, () => console.log(`rocket has been fired at localhost:${process.env.PORT}`));
