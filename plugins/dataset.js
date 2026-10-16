import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import yaml from 'yaml'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.resolve(__dirname, '..')

const DATA_DIR = path.join(ROOT, 'data')

const cates = {}

const files = fs.readdirSync(DATA_DIR).filter(x => x.endsWith('.yml'))

// console.log(files);

for (const file of files) {
  const content = fs.readFileSync(path.join(DATA_DIR, file)).toString()
  const fileNoExt = file.replace('.yml', '')
  try {
    const parsed = yaml.parse(content)
    cates[fileNoExt.trim('.yml')] = parsed
  }
  catch (e) {
    console.warn(`Site config ${file} is invalid: ${e.message}`)
  }
}

// console.log(cates)

const script = `export default ${JSON.stringify(cates)}`

export default function datasetPlugin() {
  const virtualFileId = 'virtual:dataset'

  return {
    name: 'dataset',
    resolveId(id) {
      if (id === virtualFileId)
        return virtualFileId
    },
    load(id) {
      if (id === virtualFileId)
        return script
    },
  }
}
