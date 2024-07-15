// ******************************************
// **************************************
const File = require("./command")
const yargs = require("yargs")
///////////////////////////////////////
yargs.command({
    command: 'add',
    describe: "yoy have add an item",
    builder: {
        id: {
            describe: "this is the id",
            demandOption: true,
            type: "Number",
        },
        FirstName: {
            describe: "this is the First Name",
            demandOption: true,
            type: "string",
        },
        LastName: {
            describe: "this is the Last Name",
            demandOption: true,
            type: "string",
        },
        city: {
            describe: "this is the City",
            demandOption: true,
            type: "string",
        },
        age: {
            describe: "this is the age",
            demandOption: true,
            type: "string",
        }

    },
    handler: (x) => {
        File.addemployee(x.id, x.FirstName, x.LastName, x.city, x.age)
    }
})
// *********************************************************

yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) => {
        File.deleteData(x.id)
    }
})
//************************************************************* */
   
yargs.command({
    command: "read",
    describe: "to read an item",
    builder: {
        id: {
            describe: "this is the id",
            demandOption: true,
            type: "string",
        }
    },
    handler: (x) => {
        File.readData(x.id)
    }
}) 
//////////////////////////////////////////////////////////////////
yargs.command({
    command:"list",
    describe:"to print name and city an item",
    handler: (x) => {
        File.printlist()
    }
})

// *********************************************************
yargs.parse()