// module.export ={user:{age:26}} export
// module.exports.age=26          export


function createUser(name, age) {
    return {
        name,
        age,
        greating: () => {
            console.log(`Hello my name is ${name} and am ${age} old`)
        }
    }
}

module.exports = {
    createUser
}
