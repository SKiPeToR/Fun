module.export=Collection;

function Collection(){
    this.array=[];
}
Collection.prototype.values=function(){
    return this.array;
}
Collection.prototype.at=function (index) {
    var nIndex=index-1;
    if(nIndex<this.array.length && nIndex>=0) return this.array[nIndex];
    else return null;
}
Collection.prototype.append=function (elements){
    var arr=this.array;
    if(elements.hasOwnProperty('array')){
        arr=arr.concat(elements.array);
    }
    else arr=arr.concat(elements);
    this.array=arr;
}
Collection.prototype.removeAt=function(index) {
    var nIndex=index-1;
    if(nIndex<this.array.length && nIndex>=0) {
        this.array.splice(nIndex,1);
        return true;
    }
    else return false;
}
Collection.prototype.count=function () {
    return this.array.length;
}


Collection.from=function(elements) {
    var temp=new Collection();
    temp.append(elements);
    return temp;
}