const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': 'yarn lint',
    'pre-push': tasks(['yarn lint', 'yarn build'])
  }
}
