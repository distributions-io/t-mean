'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// MEAN //

/**
* FUNCTION mean( v )
*	Computes the distribution mean for a Student t with parameter v.
*
* @param {Number} v - degrees of freedom
* @returns {Number} distribution mean
*/
function mean( v ) {
	if ( !isPositive( v ) ) {
		return NaN;
	}
	return v > 1 ? 0 : NaN;
} // end FUNCTION mean()


// EXPORTS

module.exports =  mean;
