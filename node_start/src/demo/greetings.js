
 let currentDate = new Date();
 module.exports.date = currentDate;

module.exports.SayMessage = function (){

    let hour = currentDate.getHours();

    if (hour > 17 || hour <= 6){
        return "Good evening";
    }else{
        if( hour > 6 ){
            return "Good morning";
        }else{
            return "Good day";
        }
    }

}

// var fileName = Module._resolveFilename(request, parent, isMain);
// var cachedModule = Module._cache[fileName];
// if (cachedModule) {
//     updateChildren(parent, cachedModule, true);
//     return cachedModule.exports;
// }
module.exports.name = "JohnSkeet";