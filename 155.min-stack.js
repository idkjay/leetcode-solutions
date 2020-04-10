155. Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 
Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

Solution: 

let MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    let arr = this.stack.slice();
    return arr.pop();
};

MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};

or 

class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }
    push(x) {
        const valMinPair = {val: x, prevMin: this.min};
        this.stack.push(valMinPair);
        this.min = Math.min(this.min, x);
    }
    pop() {
        const {val, prevMin} = this.stack.pop();
        this.min = prevMin;
        return val;
    }
    top() {
        return this.stack[this.stack.length - 1].val;
    }
    getMin() {
        return this.min;
    }
}

Explanation:
First solution is done using slice() and Math.min() and second is through Class syntax.