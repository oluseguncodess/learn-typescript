--> Found an article on Object Oriented Programming with TypeScript ---> https://dev.to/rajrathod/mastering-object-oriented-programming-with-typescript-encapsulation-abstraction-inheritance-and-polymorphism-explained-c6p    

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

#### Super
Super can be used to extends a super class methods into sub-classes!

#### Similiarities and differences between Private and Protected Keywords
Private and protected are similar because they don't allow you access data. There difference is that priavte doesn't allow you access a class's data from it's sub-classes while protected does.

NOTE --> One thing he said about creating sub-classes what that if you what to know a sub-class, use the IS-A test. This sub-class, is it actually the class too? Is a Tiger an animal, if yes, that's a sub-class. For properties, the HAS-A test works. A Tiger HAS-A stripe doesn't make a Tiger a Stripe!
