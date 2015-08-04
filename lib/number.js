'use strict';

// MEAN //

/**
* FUNCTION mean( v )
*	Computes the mean for a Student t distribution with parameter v.
*
* @param {Number} v - degrees of freedom
* @returns {Number} distribution mean
*/
function mean( v ) {
	return v > 1 ? 0 : NaN;
} // end FUNCTION mean()


// EXPORTS

module.exports =  mean;
