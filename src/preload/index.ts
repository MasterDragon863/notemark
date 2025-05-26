import { contextBridge } from 'electron'

if (!process.contextIsolated){
  throw new Error('Context isolation is disabled')
}

try {
  contextBridge.exposeInMainWorld('contextBridge', {
    //TODO
  })
} catch (error) {
  console.error(error)
}
