import {addAnimation} from './animations'

const handleIntersect = (entry) => {
	const element = entry[0].target
	const ratio = entry[0].intersectionRatio;
	const boundingRect = entry[0].boundingClientRect;
	const intersectionRect = entry[0].intersectionRect; // .top - always 0

	if (ratio <= 1 && ratio > .5) {
		if (!(boundingRect.top < intersectionRect.top)) {
			addAnimation(element)
		}
	}
}

export {handleIntersect}
