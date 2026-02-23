1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans : getElementById: Targets a single element by its unique ID. It’s the most efficient way to grab an element if you know the ID.

getElementsByClassName: Returns a live HTMLCollection of all elements that have a specific class name.

querySelector: A versatile tool that uses CSS selectors.It returns only the first matching element.

querySelectorAll: Similar to querySelector, but it returns a static NodeList of all matching elements.

2. How do you create and insert a new element into the DOM?

Ans: We use document.createElement('tagName') to create a new element.Then we use tagName.innerText to set a innertext in the element.We insert this element in a parent by using appendChild().

3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling is a type of event propagation in the HTML DOM where an event starts from the specific element that triggered it and then bubbles up to its ancestors in the hierarchy.

IEvent Bubbling works like a ripple in reverse: when you click an element, its own event handler fires first, then the event automatically bubbles up to its parent, grandparent, and so on, until it reaches the window. This allows any ancestor element to detect and respond to an action that started deep inside the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where you attach a single event listener to a parent element instead of each individual child. It works because of Event Bubbling, where an event on a child bubbles up to the parent to be handled. This is highly useful for performance, as it saves memory by using fewer listeners, and for flexibility, because it automatically works for new child elements added to the DOM later.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault(): This stops the browser's default behavior. For example, it prevents a link from opening a URL or a form from refreshing the page upon submission.

stopPropagation(): This stops the event from bubbling. it prevents the event from traveling up the DOM tree, ensuring that parent event handlers are not triggered by an action on a child element.



