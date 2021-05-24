import {handleIntersect} from "@/animations/helpers/intersect";

const createObserver = (element) => {
	let observer
	let options = {
		root: null,
		rootMargin: '0px',
		threshold: [...Array(100).keys()].map(x => x / 100),
	}

	observer = new IntersectionObserver(handleIntersect, options)
	observer.observe(element)
}

export {createObserver}