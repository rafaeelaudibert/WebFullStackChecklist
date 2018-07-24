const arvore = $('#treeId');
for (tech in technologies) {

	const li = $('<li>')
		.append($('<span>')
			.addClass('folder')
			.append(`${tech} +`))
		.attr('id', tech)
	arvore.append(li);

	// Creates the ul element to append
	const ul = $('<ul>');
	li.append(ul);

	let textOut = undefined;
	for (field in technologies[tech]) {

		// Texto que será dado append + flag para saber se preciso entrar mais ou não nos níveis da árvore
		const text = (() => {
			if (technologies[tech][field] instanceof Object)
				return {
					'name': field,
					'folder': true
				};
			else if (technologies[tech][field] === '')
				return {
					'name': field,
					'folder': false
				};
			else return "";
		})();

		//Creates the LI's to be appended
		const newli = $('<li>')
			.append($('<span>'));

		// Se sou uma pasta, preciso colocar a classe, e tratar dos filhos
		if (text['folder'] == true) {

			// Adiciono a classe
			newli.children()
				.addClass('folder')
				.append(`${text['name']} +`);

			// Crio um ul, para adicionar meus filhos dentro
			const newul = $('<ul>');
			newli.append(newul);

			// Irei percorrer os filhos mais internos do meu nível atual
			// Se for uma array, cheguei no nivel final, e apenas adiciono esses valores na árvore
			if (technologies[tech][field] instanceof Array) {
				for (children in technologies[tech][field]) {
					const newnewli = $('<li>')
						.append($('<span>')
							.append(technologies[tech][field][children]));
					newul.append(newnewli);
				}
			} else { //Senão, preciso entrar mais um nível na árvore
				for (children in technologies[tech][field]) {

					const newnewli = $('<li>')
						.append($('<span>'));
					newul.append(newnewli);
					if (technologies[tech][field][children] == "") {
						newnewli.children()
							.append(`${children}`)
					} else {
						newnewli.children()
							.append(`${children}+`)
							.addClass('folder');
					}

					const newnewul = $('<ul>');
					newnewli.append(newnewul);
					for (value in technologies[tech][field][children]) {
						const newnewnewli = $('<li>')
							.append($('<span>')
								.append(technologies[tech][field][children][value]));
						newnewul.append(newnewnewli);
					}
				}
			}
		} else {
			newli.children()
				.append(`${text['name']}`);
		}

		// Se é uma pasta, dou append, senão salvo o texto em uma variável no escopo maior, para poder usar texto
		if (text != "")
			ul.append(newli);
		else {
			textOut = text;
			break;
		}

	}

	// Adiciona o nivel 2 como texto, caso não haviam mais pastas a serem adicionadas no nível 3
	if (textOut == "")
		ul.append($('<li>')
			.append($('<span>')
				.append(technologies[tech])));
}





// COISAS DO BRUNO
(() => {
	document.querySelectorAll('.folder')
		.forEach(folder => {
			const ul = folder.nextElementSibling
			ul.style.display = 'none'
		})

})()

document.querySelectorAll('.folder')
	.forEach(folder => {
		folder.onclick = (e) => {
			const ul = folder.nextElementSibling
			const display = ul.style.display

			if (display === 'none') {
				ul.style.display = 'block'
			} else {
				ul.style.display = 'none'
			}
		}
	})

document.getElementById('expand-all')
	.addEventListener("click", () => {
		document.querySelectorAll('.folder')
			.forEach(folder => {
				const ul = folder.nextElementSibling
				ul.style.display = 'block'
			})
	})

document.getElementById('close-all')
	.addEventListener("click", () => {
		document.querySelectorAll('.folder')
			.forEach(folder => {
				const ul = folder.nextElementSibling
				ul.style.display = 'none'
			})
	})
