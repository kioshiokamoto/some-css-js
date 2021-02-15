const url = 'https://s3-sa-east-1.amazonaws.com/coredise.libros/2020/Libros/Guia-docente/Matematica/Pruebas/PRUEBAS+TIPO+ECE+5+-+GU%C3%8DA+CON+SELLO.pdf';

let pdfDoc = null,
	pageNum = 1,
	pageIsRendering = false,
	pageNumIsPending = null;

const scale = 1.3,
	canvas = document.querySelector('#pdf-render'),
	ctx = canvas.getContext('2d');

//Renderizado de pdg
const renderPage = (num) => {
	pageIsRendering = true;
	//Obtener pagina
	pdfDoc.getPage(num).then((page) => {
		//console.log(page)
		const viewport = page.getViewport({ scale });
		canvas.height = viewport.height;
		canvas.width = viewport.width;
		const renderCtx = {
			canvasContext: ctx,
			viewport,
		};
		page.render(renderCtx).promise.then(() => {
			page.pageIsRendering = false;

			if (pageNumIsPending !== null) {
				renderPage(pageNumIsPending);
				pageNumIsPending = null;
			}
		});

		//Mostrar pagina actual;
		document.querySelector('#page-num').textContent = num;
	});
};
//Verificar renderizado de paginas
const queueRenderPage = (num) => {
	if (!pageIsRendering) {
		pageNumIsPending = num;
	} else {
		renderPage(num);
	}
};

//Mostrar pagina anterior
const showPrevPage = () => {
	if (pageNum <= 1) {
		return;
	}
	pageNum--;
	queueRenderPage(pageNum);
};

//Mostrar pagina siguiente
const showNextPage = () => {
	if (pageNum >= pdfDoc.numPages) {
		return;
	}
	pageNum++;
	queueRenderPage(pageNum);
};

//Obtener documento
pdfjsLib
	.getDocument(url)
	.promise.then((pdfDoc_) => {
		pdfDoc = pdfDoc_;
		document.querySelector('#page-count').textContent = pdfDoc.numPages;
		renderPage(pageNum);
		// console.log(pdfDoc)
	})
	.catch((err) => {
		//Mostrar error
		const div = document.createElement('div');
		div.className = `error`;
		div.appendChild(document.createTextNode(err.message));
		document.querySelector('body').insertBefore(div, canvas);
		//Remover navbar
		document.querySelector('.top-bar').style.display = `none`;
	});

//Eventos de boton!

document.querySelector('#prev-page').addEventListener('click', showPrevPage);
document.querySelector('#next-page').addEventListener('click', showNextPage);
