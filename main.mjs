
import {exec} from 'node:child_process'

const childProcess=exec('tar -v')

childProcess.stderr?.on('data', (m) => {
  console.log(m.toString('utf-8'))
})
childProcess.stdout?.on('data', async (m) => {
  console.log(m.toString('utf-8'))
})