function query(arr) {
    var collection=arguments[0];
    if(this.countOfFilterInArgs==0 && this.countOfSelectArgs==0) return collection;
    var check=false;
    this.selectArgs=this.sortSelect(this.selectArgs, this.countOfSelectArgs);
    //сортировка аргументов filterIn для пересечения
    for(var i=0;i<this.filterInArgs.length-1;i++){
        check=false;
        for (var index = i  + 1; index < this.filterInArgs.length; index++) {
            if (this.filterInArgs[i].field == this.filterInArgs[index].field) {
                var massive=[];
                for(var counter=0;counter<this.filterInArgs[index].valueOfField.length;counter++){
                    if(this.filterInArgs[i].valueOfField.indexOf(this.filterInArgs[index].valueOfField[counter])!=-1){
                        massive.push(this.filterInArgs[index].valueOfField[counter]);

                    }
                }
                this.filterInArgs[index].valueOfField=massive;
                var temp=this.filterInArgs[i];
                this.filterInArgs[i]=this.filterInArgs[index];
                this.filterInArgs[index]=this.filterInArgs[this.filterInArgs.length-1];
                this.filterInArgs[this.filterInArgs.length-1]=temp;
                this.filterInArgs.pop();
                index--;
            }

        }
    }

    //удаление пустых фильтров
    this.filterInArgs=this.filterInArgs.filter(function(arr) {
        if (arr.valueOfField.length>0) return arr;
    });

    //заполнение и вывод новой коллекции
    var mainCollection=[];
    var ch=0;
    for( var index1 = 0 ; index1 < arr.length; index1++ ) {
        ch=0;
        for(var index2 = 0; index2 < this.filterInArgs.length; index2++) {
            console.log('Проверяет ли объект '+(index1+1)+' содержит поле '+this.filterInArgs[index2].field)
            if (arr[index1].hasOwnProperty([this.filterInArgs[index2].field])){
                console.log('yes');
                console.log('Объект '+(index1+1)+' содержит поле '+this.filterInArgs[index2].field)
                for(var index3 = 0 ; index3 < this.filterInArgs[index2].valueOfField.length; index3++) {
                    console.log('Проверяю равны ли поля: '+arr[index1][this.filterInArgs[index2].field]+
                        ' и '+ this.filterInArgs[index2].valueOfField[index3]);
                    if (arr[index1][this.filterInArgs[index2].field] == this.filterInArgs[index2].valueOfField[index3]) {
                        ch++;
                        console.log('yes');
                    }
                }
            }
        }
        if (ch==this.filterInArgs.length) mainCollection.push(arr[index1]);

    }
    var sA=this.selectArgs;
    for(i=0;i<mainCollection.length;i++){
        for(key in mainCollection[i]){
            if(!(sA.includes(key))) {delete mainCollection[i][key];}
        }
    }

    return mainCollection;
}

function select() {
    this.countOfFunction++;
    this.countOfSelectArgs++;
    for(var i=0;i<arguments.length;i++){
        this.selectArgs.push(arguments[i]);
    }
}

function filterIn(property, values) {
    this.countOfFilterInArgs++;
    var tempObject= {
        field: '',
        valueOfField: [],
    }
    tempObject.field = arguments[0];
    tempObject.valueOfField = arguments[1];
    this.filterInArgs.push(tempObject);
}

module.exports = {
    timeShift: function(inDate) {
        return{
        date: new Date(Date.parse(inDate)),
        value:'',
        add:function(count, param){
            switch(param) {
                case 'years': this.date.setFullYear(this.date.getFullYear() + count); break;
                case 'months': this.date.setMonth(this.date.getMonth() + count); break;
                case 'days': this.date.setDate(this.date.getDate() + count); break;
                case 'hours': this.date.setHours(this.date.getHours() + count); break;
                case 'minutes': this.date.setMinutes(this.date.getMinutes() + count); break;
            }
            this.value=this.date;
            return this;
        },

        substract:function(count2, param2){
            switch(param2) {
                case 'years': this.date.setFullYear(this.date.getFullYear() - count2); break;
                case 'months': this.date.setMonth(this.date.getMonth() - count2); break;
                case 'days': this.date.setDate(this.date.getDate() - count2); break;
                case 'hours': this.date.setHours(this.date.getHours() - count2); break;
                case 'minutes': this.date.setMinutes(this.date.getMinutes() - count2); break;
            }
            this.value=this.date;
            return this;
        },
    }},

    lib:{
    selectArgs:[],
    filterInArgs:[],
    countOfSelectArgs:0,
    countOfFilterInArgs:0,
        query: query,
        select: select,
        filterIn: filterIn,
    sortSelect:function(array,count){
    var tempArr=[]; //массив с числом повторений элементов;
    var tempArr2=[]; //массив с элементами, повторяющимися count раз.
    array.forEach(function(item,i,array){
        tempArr[item]=0;
    })
    array.forEach(function(item,i,array){
        if (tempArr[item]<count) tempArr[item]=tempArr[item]+1;
        if (tempArr[item]==count) tempArr2.push(item);
    })
    delete(tempArr);
    return tempArr2;
},
    }    
};
