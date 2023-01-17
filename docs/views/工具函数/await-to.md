```js
/**
 * @param { Promise } promise
 * @param { Object } errorExt 
 * @return { Promise }
 */
function to1(promise, errorExt) {
	return promise
		.then((data) => [null, data])
		.catch((err) => {
			if (errorExt) {
				const parsedError = Object.assign({}, err, errorExt)
				return [parsedError, undefined]
			}
			return [err, undefined]
		})
}
```

```ts
// reference https://github.com/scopsy/await-to-js

/**
 * @param { Promise } promise
 * @param { Object } errorExt 
 * @return { Promise }
 */
function to2<T, U = Error>(promise: Promise<T>, errorExt?: object) {
	return promise
		.then<[null, T]>((data: T) => [null, data])
		.catch<[U, undefined]>((err: U) => {
			if (errorExt) {
				const parsedError = Object.assign({}, err, errorExt)
				return [parsedError, undefined]
			}
			return [err, undefined]
		})
}
```
