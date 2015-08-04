/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	mean = require( './../lib/deepset.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'deepset mean', function tests() {

	it( 'should export a function', function test() {
		expect( mean ).to.be.a( 'function' );
	});

	it( 'should compute the distribution mean and deep set', function test() {
		var data, expected;

		data = [
			{'x':0.5},
			{'x':1},
			{'x':2},
			{'x':4}
		];

		data = mean( data, 'x' );
		expected = [
			{'x':NaN},
			{'x':NaN},
			{'x':0},
			{'x':0}
		];

		assert.deepEqual( data, expected );

		// Custom separator...
		data = [
			{'x':[9,0.5]},
			{'x':[9,1]},
			{'x':[9,2]},
			{'x':[9,4]}
		];

		data = mean( data, 'x/1', '/' );
		expected = [
			{'x':[9,NaN]},
			{'x':[9,NaN]},
			{'x':[9,0]},
			{'x':[9,0]}
		];

		assert.deepEqual( data, expected, 'custom separator' );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( mean( [], 'x' ), [] );
		assert.deepEqual( mean( [], 'x', '/' ), [] );
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = mean( data, 'x' );

		expected = [
			{'x':NaN},
			{'x':NaN},
			{'x':NaN},
			{'x':NaN}
		];

		assert.deepEqual( data, expected );
	});

});
