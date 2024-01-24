function sum(a) {
    var sum = 0; // Changed the initialization statement so that the variable sum is equal to 0. 
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

/* Changing the variable sum from 'sum = a[0]' to 'sum = 0' changes the state at which sum is at the start of the 'for' loop.
in the origanal code the sum varible would be declared as whatever the 0 index of the array is which will lead to errors with any list 
of numbers that starts with an integer other than 0. Now with the new declaration of the variable 'sum = 0' we start with a value of zero an iterate through 
the list which adds and sets the sum to that new value. */
