const fileObj = require('./file.js');

module.exports.add = (path, allArgs) => {
    return new Promise((resolve)=>{
        let data = [];
        allArgs.map(item => {
            data.push({ name: item, status: false })
        });
        fileObj.read(path).then((source) => {
            if (source) {
                source = JSON.parse(source);
                data = [...source, ...data];
            }
            fileObj.write(path, JSON.stringify(data));
            resolve();
        })
    })
  
}

module.exports.list = (path)=>{
    return new Promise((resolve)=>{
        fileObj.read(path).then((source) => {
            let list = [];
            if (source) {
                list = JSON.parse(source);
            }
            resolve(list)
        })
    } )
       
}

module.exports.store = (path,data)=>{
    return new Promise((resolve)=>{
        fileObj.write(path, JSON.stringify(data));
        resolve();
    })
}






