## Truth Table Generator

A simple plugin to generate Truth Tables in JavaScript.

First highlight an expression which evaluates to a boolean:

! [highlight] (assets/highlight.png)

Then press `Ctrl + Shift + P` and select `Truth Table Generator` from the menu:

! [pick] (assets/pick.png)

It will open a new tab with a generated Truth Table for your selection:

! [table] (assets/table.png)

### Note

The plugin only supports following operators:
* `&&`
* `||`
* `===`
* `==`
* `!`
* `!!`
* `!==`
* `!=`

Comments, ternary operators, bitwise operators and greater/less operators are not supported.