/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	mean = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean using an accessor', function test() {
		var v, actual, expected;

		v = [
			{'v':0.5},
			{'v':1},
			{'v':2},
			{'v':4}
		];
		actual = new Array( v.length );

		actual = mean( actual, v, getValue );
		expected = [ NaN, NaN, 0, 0 ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.v;
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( mean( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var v, actual, expected;

		v = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( v.length );
		actual = mean( actual, v, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
