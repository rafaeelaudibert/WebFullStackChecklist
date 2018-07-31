// Creates the tree, instantiating all the buttons
const tree = new treeView('treeId', technologies, {
    labels: {
      'TL': 'learn',
      'R': 'revisit',
      'LR': 'learning',
      'L': 'learned'
    },
    dataClass: 'folder',
    hide: 'true',
    subTreeSignClosed: '+',
    subTreeSignOpened: '-',
    toggle: true,
    warning: true,
    firstOpen: true
  })
  .createTree()
  .setAction('click', 'expand', 'expand-all')
  .setAction('click', 'close', 'close-all')
  .setAction('click', 'hide', 'hide-tree')
  .setAction('click', 'show', 'show-tree');