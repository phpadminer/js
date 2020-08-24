function getUrlParam(sUrl, sKey) {
    const queryArr = sUrl.split("?");
    if (queryArr.length === 1) {
        return {};
    }
    const params = ((sUrl.split("?")[1]).split("#")[0]).split("&");
    const paramsObj = {};
    params.map(item => {
        const key = item.split("=")[0];
        const value = item.split("=")[1];
        if (paramsObj.hasOwnProperty(key)) {
            if (Object.prototype.toString.call(paramsObj[key]) === "[object Array]") {
                paramsObj[key].push(value);
            } else {
                paramsObj[key] = [paramsObj[key]];
                paramsObj[key].push(value);
            }
        } else {
            paramsObj[key] = value;
        }
    });
    if (sKey !== undefined && !paramsObj.hasOwnProperty(sKey)) {
        return "";
    }
    if (sKey) {
        return paramsObj[sKey];
    }
    return paramsObj;
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key'));