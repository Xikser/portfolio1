import {createObserver} from './helpers/observer'
import {handleEntries} from "@/animations/helpers/entries";

let animation = {}

animation.init = () => {
	window.addEventListener('load', (e) => {
		const entries = handleEntries()

		entries.forEach((entry) => {
			createObserver(entry.entry)
		})
	}, false)
}
0
export {animation}