// console.log('hello')
//  const fs = require ('fs')
// // x= fs.readFileSync('test.txt').toString()
// // console.log(x)
// data =[
// {name:"mohamed",age:36},

// ]
// fs.writeFileSync('data.json',json.tosringfy(data))
//data = json.parse ()

// const myMod =require ('./mohamed')
// myMod.hi()
// student = {
//     id:1,
//     name:x
//     class:a,
//     sub: [
//         {subName:a, grade:10},
//         ....
//     ]
// }
// student => id, name, class in[a,b,c ]

// add subject =>{subName:x, subgrage:50},....

// add new student
// add subject to student
// get all students
// get single student by student id
// get students total degrees
const yargs = require('yargs')
const tasks = require('./tasks')
// id, name, class,sub
yargs.command({
    command:'add',
    describe:"add new task with  id, name, class,sub",
    builder:{
        id:{
            type:Number,
            default:parseInt((Date.now()) * Math.random())
        },         
        name:{
            type:String,
            demandOption: true
        },
        class:{
            type:String,
            demandOption:true
        },
        sub:{
            type:String,
            demandOption:true
        }
    },
    handler: function(argv){
        let task = {id:argv.id, name:argv.name,class:argv.class, sub:argv.sub}
        tasks.addTask(task)
    }
})
yargs.command({
    command:"showAll"
})

yargs.command({
    command:"editTask"
})

yargs.command({
    command:"delTask"
})

yargs.argv
