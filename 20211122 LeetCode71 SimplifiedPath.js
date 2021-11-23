var simplifyPath = function(path) {
    let result = []

    let pathArray = path.split("/")

    for (let element of pathArray) {
        if (element === "" || element ===".") {}
        else if (element ==="..") {result.pop()}
        else {result.push(element)}
    }

    return ( "/" + result.join("/"))

};
