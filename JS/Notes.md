JS Notes HYF:

Not java
- Using inInstpect better:
- interactive,handling data
- you should use it but not all the time : css is lighter and better
-> standardized and behaves differentl then js is good 
: DO NOT OVER USE JAVASCRIPT
be minimalist with it. can affect performance
::>>> Limit of when not to use ...how slow ?

NODE no interaction with DOM
but simlar foundations and concepts.
foundation and 
:: declaring variables : 



    Var
	Function / Global

    letand const >	Block { }	Block { }


Hoisted and initialized as undefined	
Hoisted but uninitialized (Temporal Dead Zone)

const initial value is always required

The Temporal Dead Zone (TDZ) is the time span from the beginning of a scope until a let or const variable is declared and initialized, during which accessing the variable causes a ReferenceError.
How the TDZ Works




Hoisting in JavaScript is the behavior where declarations are processed before code execution, making bindings exist before their declaration line runs.





























TYPES: primitive=str,num,bigint,bool,undef,null,symbol | object
primitive=immutable/value | obj=identity/reference+mutable




VAR: const binding fixed | let reassign | var fn-scope/avoid
SCOPE: global/module/fn/block/lexical | shadowing
HOIST: fn=full | var=undef | let/const/class=TDZ





typeof null="object", []="object", fn="function", NaN="number"
NaN!==NaN → Number.isNaN | IEEE754 | BigInt=integer arbitrary
=== strict | == coercion | Object.is(NaN,NaN), distinguishes -0




FALSY: false,0,-0,0n,"",null,undefined,NaN
|| truthy fallback | && falsy stop | ?? null/undef only | ?. optional




COERCION: String/Number/Boolean | + concat/add
parseInt partial parse; Number strict conversion




OBJ: identity: {}!=={} | b=a same obj
copy shallow {...x}/[...x] | deep structuredClone
... spread=expand/rest=collect
destructure {} []
key=str/symbol | in=prototype+own | Object.hasOwn=own
delete removes ≠ undefined



basically we have to figure out js a s some sort of 
a shifing gear langu:;:

variables
- var: special - how would we even use this
- let and const : they point to data ...but 
const obj points to reference that holds the data..


data types oand operations
comparison and arithmentic operations
% reminder ....
string, number, bigInt, undefined, null , array, objects
