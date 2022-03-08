import { handleDocumentClick } from './menu.js'

window.addEventListener('load', init)

function init (): void {
  console.log('INIT')

  document.addEventListener('click', handleDocumentClick)
}
