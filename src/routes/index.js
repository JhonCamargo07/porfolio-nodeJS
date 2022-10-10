import {Router} from 'express'
import {join} from 'path'
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
// const express = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page'
    })
})

router.get('/about', (req, res) => {
    res.render('about-me', {
        title: 'About me page'
    })
})

router.get('/skills', (req, res) => {
    res.render('skills', {
        title: 'Skills page'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact page'
    })
})

// router.get('/img', (req, res) => {
//     res.status(200).sendFile('')
// })

router.use((req, res) => {
    res.render('error404', {
        title: 'Page no found'
    })
})

export default router;
