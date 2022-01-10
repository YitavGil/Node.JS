const fs = require('fs')
const uniqid = require('uniqid');

const getUsers =  () => {
    return 'Your users...'
}

const addUser = (id, name, email) => {
    const users = loadUsers()
    
    const duplicateUser = users.find((user) => user.id === id)
   

    if(!duplicateUser) {
        users.push({
            id: uniqid(),
            userName: name,
            email,
        })
        saveUsers(users)
    }
    else {
        console.log('user title taken');
    }

}

const removeUser = (id) => {
   const users = loadUsers()
   const usersToKeep = users.filter((user)=> user.id !== id)

   if(users.length > usersToKeep.length) {
       console.log('user removed!');
       saveUsers(usersToKeep)
   } else {
       console.log("No user found!");
   }
}

const listUsers = () => {
    const users = loadUsers()
    console.log('your users');

    users.forEach((user) => {
        console.log(user.name);
    });
}

const readUser = (id) => {
    const users = loadUsers()
    const user = users.find((user) => user.id === id)

    if(user) {
        console.log(user.name);
    } else {
        console.log("no user found");
    }
} 

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users)
    fs.writeFileSync('users.json', dataJSON)
}

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }

   
}

const updateUser = (id, name, email) => {
    const users = loadData();
    const userToUpdate = users.find((user) => user.id === id);
    if (!userToUpdate) {
        console.log(chalk.red('User not found'));
    } else {
        if (name) {
            userToUpdate.userName = name;
        }
        if (email) {
            if (!validator.isEmail(email)) {
                console.log(chalk.red('Email is not valid'));
                return;
            }
            userToUpdate.email = email;
        }
        saveData(users);
        console.log(chalk.inverse.green('User updated'));
    }
};


module.exports = {
    getUsers: getUsers,
    addUser: addUser,
    removeUser: removeUser,
    listUsers: listUsers, 
    readUser: readUser,
    updateUser: updateUser
}