import {addAnimation, removeAnimation} from './animations'

const handleIntersect = (entry) => {
	const element = entry[0].target

	const ratio = entry[0].intersectionRatio;
	const boundingRect = entry[0].boundingClientRect;
	const intersectionRect = entry[0].intersectionRect; // .top - always 0

	if(element.isIntersecting) {
		console.log(element)
	}




	// if (ratio < 1) {
	// 	if (boundingRect.top < intersectionRect.top) {
	// 		//top screen
	// 	} else {
	// 		//bottom screen
	//
	// 		// if(element.classList.contains('elem-animate')) {
	// 		// 	removeAnimation(element)
	// 		// }
	// 	}
	// }
	// else {
	// 	//center screen
	// 	// console.log(entry)
	// 	addAnimation(element)
	//
	// 	if(element.classList.contains('services'))
	// 		console.log(element)
	// 	// element.style.background = 'yellow'
	// }
}

export {handleIntersect}