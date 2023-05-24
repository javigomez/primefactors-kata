import { getPrimeFactorsFor } from '../core/primefactors'

describe('Prime Factors', () => {
	it('returns the prime factors of a number 2', () => {
		expect(getPrimeFactorsFor(2)).toEqual([2])
		expect(getPrimeFactorsFor(2*2)).toEqual([2,2])
		expect(getPrimeFactorsFor(2*2*2)).toEqual([2,2,2])
		expect(getPrimeFactorsFor(3)).toEqual([3])
		expect(getPrimeFactorsFor(3*3)).toEqual([3,3])
		expect(getPrimeFactorsFor(3*2)).toEqual([2,3])
		expect(getPrimeFactorsFor(5*5)).toEqual([5,5])
		expect(getPrimeFactorsFor(5 * 7 * 11 * 3)).toEqual([3,5,7,11])
	})
})


