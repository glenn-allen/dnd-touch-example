# React DnD Touch Backend monitor.isOver Example
**Note: This issue has now been fixed in version 0.3.0 of the `react-dnd-touch-backend`.  Leaving this example as 0.2.7 for historical purposes.**
======

## History
A simple example that shows `monitor.isOver({ shallow: true })` doesn't behave as expected.
Based on the React DnD [docs](https://gaearon.github.io/react-dnd/docs-drop-target-monitor.html) and this [example](https://gaearon.github.io/react-dnd/examples-nesting-drop-targets.html) when `{ shallow: true }` the highest DOM node should return `true` for `monitor.isOver`.

Instead it returns `true` for the bottom DOM node.

## Starting server
```> npm start```
Then navigate to [http://localhost:3000/](http://localhost:3000/)
