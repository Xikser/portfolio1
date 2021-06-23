import {handleIntersect} from "@/animations/helpers/intersect";

const createObserver = (element) => {
	// let observer
	let options = {
		root: null,
		rootMargin: '4px',
		threshold: .5,
	}

	// observer = new IntersectionObserver(handleIntersect, options)
	// observer.observe(element)
	// console.log(element)

	let observer = new IntersectionObserver((handleIntersect, observer) => {

	})
	// observer.observe(element)
	console.log(observer)
}

export {createObserver}