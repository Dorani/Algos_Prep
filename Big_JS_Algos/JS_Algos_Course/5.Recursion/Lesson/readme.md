### Call Stack - Recursion

- When a function is invoked, it's placed on the top of the call stack.

- So just like if we have a stack of papers on our desk, the first the newest one that we put on goes

on top.

- And then when JavaScript sees the return keyword or when a function ends, there's no more code to run.

- The compiler will remove the top item from the stack.

- So the idea of a stack, the reason I'm saying is stack of papers on a desk is that you put something
on top.

- When you remove something, you also remove from the top.

- You don't remove from the bottom of a stack of papers. You take whatever's on top. So that's the idea of the call stack.

### Recursion breakdown:
- So the idea is that we're invoking the same function over and over, having one function call itself recursively, but there has to be a stopping point.

- And that's the second piece, which is called the Base Case.

- So the base case is where the recursion stops.
There has to be an end of the line.

- It doesn't just continue to call itself over and over and over and over forever.

- Just like a while, Loop has to have some place to stop, otherwise it just goes forever and makes your

- Example:

```javascript
    function countdown(num) {
        if(num <= 0) {
            console.log('All DONE!');
            return;
        }
        console.log(num);
        num--;
        countdown(num);
    }
```

- Explanation:
    - Output: 5, 4, 3, 2, 1
    - So I just want to show that you can easily do this without recursion, and that's not the point.
    - If we execute with 3 as num:
        - print 3
        - countdown(2)
        - print 2
        - countdown(1)
        - print 1
        - countdown(0)
        - print 'all done'
