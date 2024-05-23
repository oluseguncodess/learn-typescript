# Learning OOP with TypeScript
Classes are not objects but are used to construct objects

### index.ts
I learnt that variables are actually pointers!

### encapsulation.ts
This is used to hide a class property from being accessed publically. You use the `private` keyword to encpasulate the properties. You can use getter and setter properties(methods) to access and change properties. 

### Inheritance.ts
This is a way sub-classes inherit properties and methods from their super-class. You use the keyword `extends` on the sub-classes with the name of the super-class to do so. 

However, if the super class has a private keyword, it won't be able to access the super-class's methods and properties unless you create setter and getter properties to do so

If we however use the keyword `protected`, we will be able to access it inside of sub-classes that have inherited the super-class but not outside of those subclasses (please test this!) --- verified ✅

NOTE --> You can redeclare methods from a class in a sub-class!

#### Similiarities and differences between Private and Protected Keywords
Private and protected are similar because they don't allow you access data. There difference is that priavte doesn't allow you access a class's data from it's sub-classes while protected does.

