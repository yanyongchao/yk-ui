import { App } from 'vue'

export type ComponentPlugin = { install: (app: App) => void }
