import {addAnimation, removeAnimation} from './animations'

const handleIntersect = (entry) => {
	const element = entry[0].target

	const ratio = entry[0].intersectionRatio;
	const boundingRect = entry[0].boundingClientRect;
	const intersectionRect = entry[0].intersectionRect;

	if (ratio < 1) {
		if (boundingRect.top < intersectionRect.top) {
			//top screen
		} else {
			//bottom screen
			// if(element.classList.contains('elem-animate')) {
			// 	console.log('remove')
			// 	removeAnimation(element)
			// }
		}
	}
	else {
		console.log('add')
		addAnimation(element)
		//center screen
		// element.style.background = 'yellow'
	}
}

export {handleIntersect}