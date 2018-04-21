# Async-readline

Async wrapper for readline

```js
const async_readline = require('async-readline');
const rd = new async_readline({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

(async () => {
    let text;
    text = await rd.line();
    text = await rd.question("Tell me how much you love me");
})();
```

## Methods

* `line` --- returns promise which resolves next line from input
* `question` --- prints its argument to output and then acts like `line`