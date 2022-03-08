import { Response } from 'express'

export function MainController () {
  function indexPage (_: any, res: Response): void {
    res.render('pages/index.pug', { title: 'Home' })
  }

  function aboutPage (_: any, res: Response): void {
    res.render('pages/about.pug', { title: 'About' })
  }

  function contactPage (_: any, res: Response): void {
    res.render('pages/contact.pug', { title: 'Contact' })
  }

  return {
    indexPage,
    aboutPage,
    contactPage
  }
}
