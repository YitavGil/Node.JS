
const { demandOption } = require('yargs');
const yargs = require('yargs')
const users = require('./users.js');


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new user',
    builder: {
        id: {
            describe: "user id",
            demandOption:true,
            type: 'string'
        },
        body: {
            describe: 'user body',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
     users.addUser(argv.id, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe:'Remove a user',
    builder: {
            id: {
                describe: 'user id',
                demandOption:true,
                type: 'string'
            }
    },
    handler(argv) {
       users.removeUser(argv.id)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: "List your users",
    handler() {
        users.listUsers
    }
})


//Create read command 
yargs.command ({
    command: "read",
    describe: "Read a user",
    builder: {
        id: {
            describe: 'user id',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       users.readuser(atgv.id)
    }
})


//Update user
yargs.command({
    command: 'update',
    describe: 'Update a user info',
    builder: {
        id: {
            describe: 'User id',
            demandOption: true,
            type: 'string',
        },
        name: {
            describe: 'User name',
            demandOption: false,
            type: 'string',
        },
        email: {
            describe: 'User email',
            demandOption: false,
            type: 'string',
        },
    },
    handler(argv) {
        updateUser(argv.id, argv.name, argv.email);
    },
});
yargs.parse()



