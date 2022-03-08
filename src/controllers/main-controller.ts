import { Response } from 'express'

export function MainController () {
  function indexPage (_: any, res: Response): void {
    res.render('pages/index.pug', { title: 'Home' })
  }

  return {
    indexPage
  }
}
