import { join } from 'lodash-es'
import './style.css'
import Icon from './icon.svg'
import Data from './data.xml'
import { name } from './jsonData'

function component() {
  const element = document.createElement('div')

  element.innerHTML = join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)

  console.log(JSON.stringify(Data))
  console.log(name)

  return element
}

document.body.appendChild(component())