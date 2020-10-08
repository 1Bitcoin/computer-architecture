var fs = require('fs');

function getFiles(dir, files_)
{ 
    files_ = files_ || [];
    var files = fs.readdirSync(dir);

    for (var i in files)
    {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory())
        {   
            getFiles(name, files_);
        } 
        else 
        {
            let fileContent = fs.readFileSync(name, "utf8");
            if (fileContent.length <= 10)
            {
                files_.push(name);
            }
        }
    }
    return files_;
};

console.log(getFiles('C:/Users/zhigalkin/OneDrive/Desktop/t'));