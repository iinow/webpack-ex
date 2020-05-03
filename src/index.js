function getComponent() {
  return import('lodash-es').then( join => {
    const element = document.createElement('div')

    element.innerHTML = join(['Hello', 'webpack'], ' ')

    return element
  })
}

document.body.appendChild(getComponent())