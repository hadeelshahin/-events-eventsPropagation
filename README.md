"# project104-events" 
1-Events and Event Listeners:

Events are actions or occurrences in a program, often triggered by user interactions or system changes.
Event Listeners are functions that respond to specific events.
Events are inherent in the programming architecture and are generated in response to user actions or system changes.
Adding and Removing Event Listeners:

Events are added to DOM elements using the addEventListener method.
addEventListener takes three arguments: the event type, the listener function, and an optional boolean value indicating whether to use event capturing (default is false).
Events can be removed using the removeEventListener method. Note: Listeners implemented using anonymous functions cannot be removed due to reference issues.
Using preventDefault() to Prevent Default Behavior:

2-The preventDefault method is used with events to prevent their default behavior.
This is useful in scenarios like form submissions or link clicks where you want to override the default action.
Event Propagation Phases:

3-Event propagation occurs in three phases: capturing, target, and bubbling.
Capturing Phase: The event goes down the DOM tree, from the root to the target element.
Target Phase: The event reaches the target element.
Bubbling Phase: The event bubbles up from the target element back to the root.
Event listeners are checked during each phase to determine if they should respond to the event.
Stop Propagation:

4-The stopPropagation method is used to stop the event from further propagation.
This prevents the event from reaching the next phase (e.g., stopping it from reaching the bubbling phase).
Event Delegation:

5-Event delegation is a design pattern where a common ancestor handles events for multiple similar elements.
Instead of attaching listeners to each element, a single listener is added to a common ancestor.
event.target is then used to determine which specific child element triggered the event.
