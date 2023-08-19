import {  Router} from "express"
const router = Router()



router.get('/',(req, res) => res.render('index' , {title: 'este es el index'}))
router.get('/about',(req, res) => res.render('about' , {title: 'este es about me '}))
router.get('/contact',(req, res) => res.render('contact' , {title: 'este es el contact'}))


export default router