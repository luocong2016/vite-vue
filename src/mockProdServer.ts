import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.globEager('./mock/*.ts')

const mockModules: any[] = []

// 排除下划线开头的文件
Object.keys(modules).forEach(key => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
