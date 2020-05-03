import Print from './print'
import { join } from 'lodash-es'

function getComponent() {
  const element = document.createElement('div')

  element.innerHTML = join(['Hello', 'webpack'], ' ')
  element.onclick = Print.bind(null, 'Hello webpack')

  return element
}

document.body.appendChild(getComponent())