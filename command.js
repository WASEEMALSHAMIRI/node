const fs = require("fs")
const addemployee = (id, FirstName, LastName, city, age) => {
    const lData = readinfo()
    const addemployeedata = lData.filter((object) => {
        return object.id === id
    })

    if (addemployeedata.length == 0) {
        lData.push({
            id: id,
            FirstName: FirstName,
            LastName: LastName,
            city: city,
            age: age,
        })
        savedata(lData)
    } else {
        console.log("ERROR DUPLICATED DATA")
    }
}
////////////////////////////////////////////////////////////////
//********************************************************* */



const readinfo = () => {
    try {
        const DataJson = fs.readFileSync("Data.json").toString()
        return JSON.parse(DataJson)
    }
    catch {
        return []
    }
}


////////////////////////////////////////////////////////////////
//********************************************************* */

const savedata = (Data) => {
    const saveallDataJson = JSON.stringify(Data)
    fs.writeFileSync("Data.json", saveallDataJson)
}

////////////////////////////////////////////////////////////
//******************************************************* */

const deleteData = (id) => {
    const lData = readinfo()
    const datafilter = lData.filter((object) => {
        return object.id !== id

    })
    savedata(datafilter)
}
////////////////////////////////////////////////////
//********************************************** */
const readData = (id) => {
    const lData = readinfo()
    const datafilter = lData.find((object) => {
        return object.id === id

    })
    console.log(datafilter)
}
//////////////////////////////////////////////////////
// **************************************************
const printlist = (id) => {
    const lData = readinfo()
    lData.forEach((object) => {

        console.log(object.FirstName, object.LastName,object.city)
    })

}

// ///////////////////////////////////////////////
// **********************************************
module.exports = {
    addemployee,
    deleteData,
    readData,
    printlist,
}

////////////////////////////////////////////////////
//********************************************** */
