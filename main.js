// Labels for the status classes
const labels = {
	'TL': 'learn',
	'R': 'revisit',
	'LR': 'learning',
	'L': 'learned'
}

const options = {
	statusLabels: labels,
	dataClass: 'folder',
	hide: true,
	subTreeSignClosed: '+',
	subTreeSignOpened: '-',
	toggle: true
};



// Initializing stuff
(() => {

	// Creates the tree and calls the function to insert the tree, in dataTree.root
	const dataTree = new treeView('treeId', technologies, options)
		.createTree()
		.showTree(document.body.children[2]);

})();

// Setting expand-all button function
document.getElementById('expand-all')
	.addEventListener('click', () => {
		document.querySelectorAll('.folder')
			.forEach(folder => {
				const ul = folder.nextElementSibling
				ul.style.display = 'block'
			})
	})

// Setting close-all button function
document.getElementById('close-all')
	.addEventListener('click', () => {
		document.querySelectorAll('.folder')
			.forEach(folder => {
				const ul = folder.nextElementSibling
				ul.style.display = 'none'
			})
	})
