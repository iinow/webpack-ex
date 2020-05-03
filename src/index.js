import { join } from 'lodash-es'
import printMe from './print'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.innerHTML = join(['Hello', 'webpack'], ' ')

  btn.innerText = 'Click me and check the console'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())