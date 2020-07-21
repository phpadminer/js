const fs = require('fs');

module.exports = {
    read(path) {
        return new Promise((resolve,reject) => {
            fs.readFile(path, {
                encoding: 'utf-8',
                flag: 'a+'
            }, (err, data) => {
                if(err) reject(err);
                resolve(data);
            })
        })
    },
    write(path,data){
        return new Promise((resolve,reject) => {
            fs.writeFile(path,data,(err)=>{
                if(err) reject(err);
                resolve();
            })
        })
    }
};
