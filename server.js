const yargs = require('yargs')
const tasks = require('./tasks')

yargs.command({
    command:'delete',
    describe:"delete task with title, content, end date",
    builder:{
        id:{
            type:Number,
            default:parseInt((Date.now()) * Math.random())
        },         
        title:{
            type:String,
            demandOption: true
        },
        content:{
            type:String,
            demandOption:true
        },
        dueDate:{
            type:Date,
            demandOption:true
        }
    },
    handler: function(argv){
        let task = {id:argv.id, title:argv.title,content:argv.content, dueDate:argv.dueDate}
        tasks.delTask(task)
    }
})


yargs.command({
    command:"delTask"
})

yargs.argv