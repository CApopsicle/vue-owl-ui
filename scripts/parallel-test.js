require('shelljs/global')
const { CIRCLE_NODE_INDEX } = process.env

const cmds = [
  'npm test && curl -s https://codecov.io/bash | bash',
  'npm run lint',
  'npm run build.ui',
  'npm run build.pages',
]

if (cmds[CIRCLE_NODE_INDEX]) {
  console.log(cmds[CIRCLE_NODE_INDEX])
  if (exec(cmds[CIRCLE_NODE_INDEX]).code !== 0) {
    exit(1)
  }
}
