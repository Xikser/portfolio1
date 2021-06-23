const handleEntries = () => {
	const entries = document.querySelectorAll('[data-anim]');
	return Array.prototype.map.call(entries, entry => ({ entry }))
}

export {handleEntries}
