/**
 * HTTP
 * -
 * This service returns Promises to its invoker. This will be improved in the future.
 * For now, it's a termporary wrapper for HTTP requests coming from components.
 */
module.exports = {
	get(URL, params) {
		return fetch(URL);
	}
}