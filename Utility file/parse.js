var arr = ["fsEl_6942", "fsEl_6946", "fsEl_6948","fsEl_6950",
    "fsEl_6952", "fsEl_6954", "fsEl_21311", "fsEl_21314","fsEl_21319"]

var output="{"   
for(var id of arr){
    var head = document.getElementById(id).children[0].children[0].children[0].innerText
    output += '"'+head+'":{\n' 
    var tem = document.getElementById(id).children[1].children[1].children[0].children[2].children[1].childNodes
    for (var ele of tem) {
        if(ele != tem[tem.length-1]){
            output += '\t"' + ele.children[0].innerText + '":"' + ele.children[1].innerText + '",\n'
        }else{
            output += '\t"' + ele.children[0].innerText + '":"' + ele.children[1].innerText + '"\n'
        }
    }
    if(id != arr[arr.length-1]){
        output += "},\n" 
    }else{
        output += "}\n" 
    }
}  
output += "}"  
console.log(output)  
