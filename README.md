# React DnD Touch Backend monitor.isOver Example

A simple example that shows `monitor.isOver({ shallow: true })` doesn't behave as expected.
Based on the React DnD [docs](https://gaearon.github.io/react-dnd/docs-drop-target-monitor.html) and this [example](https://gaearon.github.io/react-dnd/examples-nesting-drop-targets.html) when `{ shallow: true }` the highest DOM node should return `true` for `monitor.isOver`.

Instead it returns `true` for the bottom DOM node.

## Starting server
```> npm start```
Then navigate to [http://localhost:3000/](http://localhost:3000/)
