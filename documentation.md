# TypeScript
TypeScript is all about Type Safety in Javascript! It includes static type checking which is associating types with variables, functions, etc so errors can be caught instantly at compile-time rather than at run-time 

TypeScript is a development tool because it kind of still converts to javascript before your program runs. It just helps you write better javascript code.

## Differences between Javascript and TypeScript
In Javascript, it's possible to reassign a variable with a different data type but that isn't allowed in typescript.

## TypeScript Syntax 
When declaring a variable, you have to include the date type - `let variableName : type = variable` 

### Variables
- When we specify the type in typescript, it suggests several methods we can use for that type

### Functions
- When passing in an argument in a function, always specify the type

- You can specify the type of data a function returns e.g 

`function(name: string) :string {return "Hello" //correct return 5 //typescript error}`

## Keywords 

`protected` - this doesn't allow a specified property or method to be accessed by an instance. It can only be accessed by a class and it's sub-classes(class that are extended)

`static` - we use this keyword so we can call a method using the class name rather than having to create an instance. It's called like how you'll call a function. Subclasses can also call the method or property. 

`private` - this makes the specified method or property of a class only accessible 

`void` - used infunctions that aren't returning any values.

### Abstract class
This is a classs that cannot be instanciated! 


## Notes 
We will be updating this as time goes on, we write things we don't quite understand yet here. 

- Use `export{}` to clear out errors (errors such as using let in typescript and typescript being a b***h about it)