import Print from './print'
import { join } from 'lodash-es'
import { printMsg } from 'halib'
import './app.css'

function getComponent() {
  const element = document.createElement('div')

  element.innerHTML = join(['Hello', 'webpack'], ' ')
  element.onclick = Print.bind(null, 'Hello webpack')
  printMsg()
  return element
}

document.body.appendChild(getComponent())