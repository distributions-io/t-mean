'use strict';

var matrix = require( 'dstructs-matrix' ),
	mean = require( './../lib' );

var v,
	mat,
	out,
	tmp,
	i;

// ----
// Plain arrays...
v = new Array( 10 );
for ( i = 0; i < v.length; i++ ) {
	v[ i ] = i;
}
out = mean( v );
console.log( 'Arrays: %s\n', out );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < v.length; i++ ) {
	v[ i ] = {
		'x': v[ i ]
	};
}
out = mean( v, {
	'accessor': getValue
});
console.log( 'Accessors: %s\n', out );


// ----
// Deep set arrays...
for ( i = 0; i < v.length; i++ ) {
	v[ i ] = {
		'x': [ i, v[ i ].x ]
	};
}
out = mean( v, {
	'path': 'x/1',
	'sep': '/'
});
console.log( 'Deepset:');
console.dir( out );
console.log( '\n' );


// ----
// Typed arrays...
v = new Int32Array( 10 );
for ( i = 0; i < v.length; i++ ) {
	v[ i ] = i;
}
tmp = mean( v );
out = '';
for ( i = 0; i < v.length; i++ ) {
	out += tmp[ i ];
	if ( i < v.length-1 ) {
		out += ',';
	}
}
console.log( 'Typed arrays: %s\n', out );


// ----
// Matrices...
mat = matrix( v, [5,2], 'int32' );
out = mean( mat );
console.log( 'Matrix: %s\n', out.toString() );


// ----
// Matrices (custom output data type)...
out = mean( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', out.dtype, out.toString() );
