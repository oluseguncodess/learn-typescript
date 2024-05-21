class Person {
    private name: string
    private age: number

    setname(name: string) {
        this.name = name;
    }

    getname() {
        return this.name;
    }

    setAge(age: number) {
        if(this.age < 0) {
            console.log(`You cannot set an age that's below 0`);
            return;
        }

        this.age = age;
    }

    getAge() {
        return this.age;
    }
}

const tobi = new Person();
tobi.setname("Tobi")
tobi.setAge(-23);
tobi.setAge(22);
console.log(`This person's name is ${tobi.getname()}. ${tobi.getname()} is ${tobi.getAge()}`);

