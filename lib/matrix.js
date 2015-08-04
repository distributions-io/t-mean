'use strict';

// MODULES //

var MEAN = require( './number.js' );


// MEAN //

/**
* FUNCTION: mean( out, x )
*	Computes the distribution mean for each parameter stored in a matrix.
*
* @param {Matrix} out - output matrix
* @param {Matrix} x - input matrix
* @returns {Matrix} output matrix
*/
function mean( out, x ) {
	var len = x.length,
		i;
	if ( out.length !== len ) {
		throw new Error( 'mean()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	for ( i = 0; i < len; i++ ) {
		out.data[ i ] = MEAN( x.data[ i ] );
	}
	return out;
} // end FUNCTION mean()


// EXPORTS //

module.exports = mean;
