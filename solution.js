//Подсказка: сюда можно складывать записи адресной книги.
var arr = ["Martin: 123324,234,234324,324","Alwares: 324","Guchis: 23123,324,312321", "Rodrigazz: 324,456"];

//Здесь можно объявить переменные и функции, которые понядобятся вам для работы ваших функций

module.exports = {
    getWords: function(stroka){var begin=0,end=0, array=[],kArray=0, str="";
        var array=stroka.split("##");
        stroka=array.join('#');
        console.log(stroka);
        for (var i=0;i<stroka.length;i++){
            if (stroka[i]=="#") {
                begin=1+i++; kArray++;
                while((stroka[i]!=" ")|| (i=stroka.length-1)){
                    i++;
                }
                end=i;
            }
            str=stroka.substring(begin,end);
            array[kArray]=str;
        }
        array.shift();
        return(array);},
    normalizeWords: function(array){arr2=[];
        var stroka="";
        array.forEach(function(item,i,array){
            item=item.toLowerCase();
            if (arr2[item]!=true) {stroka=stroka+item+", "; arr2[item]=true;}
        })
        if(stroka[stroka.length-1]==" ") stroka=stroka.slice(0,-2);
        return stroka;},
    addressBook: function(stroka){var countOfProbels=0; // good evening :)
        for(var k=0; k<stroka.length-1;k++){if (stroka[k]==' '  )countOfProbels++};
        var command=stroka.slice(0,stroka.indexOf(" "));
        var str2=stroka.slice(stroka.indexOf(" ")+1,stroka.length);

        switch(countOfProbels){
            case 2:
                command=str2.slice(0,str2.indexOf(' '));
                str1=str2.slice(str2.indexOf(' ')+1,str2.length);
                var array=str1.split(',');
                var countOfNesovpalo=0;
                //проверка на совпадение в контактах
                arr.forEach(function(item,i,arr){
                    if (item.includes(command)){
                        //проверка на совпадение в номерах контакта
                        array.forEach(function(jtem,j,array){
                            if(item.includes(jtem)==false) {item=item+", "+jtem; arr[i]=item;}
                        })
                    }
                    else {countOfNesovpalo++;}
                })
                if (countOfNesovpalo==arr.length) arr.push(str2.replace(' ',': '));
                break;
            case 1:
                var check=true;
                arr.forEach(function(item, i, arr){
                    var temp=" "+str2+",";
                    if(item.includes(temp)) arr[i]=arr[i].replace(temp,' ');
                    var temp=","+str2;
                    if(item.includes(temp) && (item.indexOf(temp)==item.length-temp.length
                        || item[item.indexOf(temp)+temp.length]==',')) arr[i]=arr[i].replace(temp,'');
                    var temp=" "+str2;
                    if(item.includes(temp) && item.indexOf(temp)==item.length-temp.length) arr[i]=arr[i].replace(temp,' ');
                })
                for(var i=0;i<arr.length;i++){if (arr[i].includes(" "+str2+",")
                    || (arr[i].includes(" "+str2) && item.indexOf(temp)==item.length-temp.length)
                    || (arr[i].includes(","+str2) && arr[i].indexOf(str2)==arr[i].length-str2.length)){
                    check=false;
                }}
                return check;
                break;
            case 0:
                var tempArr=[];
                arr.forEach(function(item, i, arr){
                    if(item[item.length-1]!=' ') tempArr.push(arr[i]);
                })
                tempArr=tempArr.sort();
                return tempArr;
                break;
        }

    }
}
