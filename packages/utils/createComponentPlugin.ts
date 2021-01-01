import { App } from 'vue'

export function createComponentPlugin<Component extends { name: string }>( component: Component) {
  return {
    ...component,
    install(app: App) {
      app.component(component.name, component)
    }
  }
}
