# type

A tiny type checker with vectorization. Outputs types as lowercase strings.

### api

`type(value, vectorized = false)`  

#### value  
Value to get type of  

#### vectorized  
A boolean which determines whether to map the type checker over an input array. `value` must be an array if `vectorized = true`.  

```javascript
const type = require('@melgrove/type');

type(5);
// 'number'

type(['typeof', 'sux']);
// 'array'

type([null, '2', {c: 3}, () => 4, undefined], true);
// [ 'null', 'string', 'object', 'function', 'undefined' ]
```
