import { App,  } from 'vue'
import Button from './button'
import { ComponentPlugin } from '../typings/shims'

const components: Array<ComponentPlugin> = [
  Button
]

const install = (app: App): void => {
  components.forEach((component: ComponentPlugin) => {
    app.use(component)
  })
}

export {
  Button
}

export default {
  install
}
