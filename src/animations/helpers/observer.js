import {handleIntersect} from "@/animations/helpers/intersect";

const createObserver = (element) => {
	let observer
	let options = {
		root: null,
		rootMargin: '30px 0px 0px 0px',
		threshold: .5,
	}

	observer = new IntersectionObserver(handleIntersect, options)
	observer.observe(element)
}

export {createObserver}
