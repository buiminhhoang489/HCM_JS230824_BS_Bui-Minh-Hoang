import {mysqlDB} from '../mysql.js'

export const userModel = {
    findMany: async () =>{
        try{
 return await new Promise ((ok,fail)=>{
    let queryStr =`
    SELECT * FROM user
    `
    mysqlDB.query(queryStr, (err, result)=>{
        if(err) ok({
            err:"Lỗi query"
        })
        ok({
            data: result 
        })
    }) 
})
        }catch(err){
            return {
                err
            }
        }
    },
    create : async (data) =>{
        console.log('data',data)
       
        try{
 return await new Promise ((ok)=>{
    let queryStr =
    // `
    // INSERT INTO user (userName, password, email)
    // VALUES ("${data.userName}", "${data.password}", "${data.email}");
    // `
    `
    INSERT INTO user SET?
   
    `
    mysqlDB.query(queryStr, data, (err, result)=>{
        if(err) ok({
            err:"Lỗi query"
        })
        ok({
            data: result 
        })
    }) 
})
        }catch(err){
            return {
                err
            }
        }
    },
    delete : async (userId) =>{
        console.log('userId',userId)
       
        try{
 return await new Promise ((ok)=>{
    let queryStr =
    // `
    // INSERT INTO user (userName, password, email)
    // VALUES ("${data.userName}", "${data.password}", "${data.email}");
    // `
    `
    DELETE FROM user WHERE id = ${userId};
   
    `
    mysqlDB.query(queryStr, (err, result)=>{
        if(err) ok({
            err:"Lỗi query"
        })
        ok({
            data: result 
        })
    }) 
})
        }catch(err){
            return {
                err
            }
        }
    },
    update : async (userId, data) =>{
        console.log('userId',userId)
       
        try{
 return await new Promise ((ok)=>{
let updateDataStr = ``;
for(let i in data){
    updateDataStr += `${i} = "${data[i]}",`
}
console.log('updateDataStr',updateDataStr.slice(0, -1))

    let queryStr =
      `
    UPDATE user
    SET ${updateDataStr.slice(0, -1)}
    WHERE id=${userId};
   
    `
    mysqlDB.query(queryStr, (err, result)=>{
        if(err) ok({
            err:"Lỗi query"
        })
        ok({
            data: result 
        })
    }) 
})
        }catch(err){
            return {
                err
            }
        }
    }
}