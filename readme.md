1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : getElementById: Targets a single element by its unique ID. It’s the most efficient way to grab an element if you know the ID.

getElementsByClassName: Returns a live HTMLCollection of all elements that have a specific class name.

querySelector: A versatile tool that uses CSS selectors.It returns only the first matching element.

querySelectorAll: Similar to querySelector, but it returns a static NodeList of all matching elements.

2. How do you create and insert a new element into the DOM?

Ans: We use document.createElement('tagName') to create a new element.Then we use classList.add to insert the element.



