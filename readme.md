## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#### getElementById:- getElementById finds one element by its id.

#### getElementsByClassName: getElementsByClassName finds many elements with same class and gives a list.

#### querySelector: querySelector finds the first element that matches a CSS selector. 

#### querySelectorAll: querySelectorAll finds all elements that match a CSS selector and gives a list. id = one, class = many, querySelector = css rule.
---

## 2. How do you create and insert a new element into the DOM?

#### make new element with document.createElement, then add with appendChild or append to other element.

---

### 3. What is Event Bubbling and how does it work?

#### event bubbling mean event go from child element up to parent element step by step.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

#### event delegation mean put one event listener on parent, it catch event from child. useful because less code, faster, no need many listeners.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

#### preventDefault() stop browser default action (like link open, form submit). stopPropagation() stop event go up to parent (stop bubbling).



