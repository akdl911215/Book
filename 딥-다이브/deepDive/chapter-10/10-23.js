const obj = {
    name: 'LEE',
    say: function () {
        return 'Hey ' + this.name
    }
}
console.log(obj.say())

const obj2 = {
    name: 'KIM',
    say() {
        return `Hey ${this.name}`
    }
}
console.log(obj2.say())