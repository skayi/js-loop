# js-loop

[![npm](https://img.shields.io/npm/v/js-loop.svg) ![npm](https://img.shields.io/npm/dm/js-loop.svg)](https://www.npmjs.com/package/js-loop)

Flexible configuration of looping tool

# Installation

```
npm install --save js-loop
```

# Usage

```javascript
import loop from "js-loop";

const loopInst = loop({
  run: yourFunction,
  args: arguments, which is using in yourFunction (not required)
  threshhold: 1000
});
```

Execute the loop instance

```javascript
loopInst.start();
```

Cancel the loop instance

```javascript
loopInst.cancel();
```

If execute a loop instance immediatly, provide second param `true` of the `loop` contructor.

```javascript
const loopInst = loop({...}, true);
```
