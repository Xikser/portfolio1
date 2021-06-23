import {handleIntersect} from "@/animations/helpers/intersect";

const createObserver = (element) => {
	let observer
	let options = {
		root: null,
		rootMargin: '0px',
		threshold: .5,
	}

	observer = new IntersectionObserver(handleIntersect, options)
	observer.observe(element)
}

export {createObserver}
