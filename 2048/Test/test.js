move = function(arr,direction,size){
    let moveScore = 0
    switch(direction){
        case 'up': //for each column
            for(var j=0;j<size;j++){ //column (i,j) - calculation i*size+j
                let iniArr = []
                for(var i=0;i<size;i++){ //row
                    if(arr[i*size+j]!=0){
                        iniArr.push(arr[i*size+j])
                    }
                }
                console.log("iniArr is " +iniArr)
                let [score,resArr] = this.shiftArr(iniArr)
                console.log("resArr is " +resArr)
                moveScore += score
                var k = 0
                for(var i=0;i<resArr.length;i++){//from top to bottom
                    arr[i*size+j] = resArr[k]
                    console.log("pos is " +(i*size+j)+'value is'+resArr[k])
                    k++
                }
                for(var i=resArr.length;i<size;i++){//bottom filled with zeros
                    arr[i*size+j] = 0
                    console.log("pos is " +(i*size+j)+'value is zero')
                }
            }
        case 'down':
            for(var j=0;j<size;j++){ //column (i,j)
                let iniArr = []
                for(var i=0;i<size;i++){ //row
                    if(arr[i*size+j]!=0){
                        iniArr.push(arr[i*size+j])
                    }
                }
                let [score,resArr] = this.shiftArr(iniArr)
                moveScore += score
                var k = 0
                for(var i=size-resArr.length;i<size;i++){//from b to t
                    arr[i*size+j] = resArr[k]
                    k++
                }
                for(var i=0;i<(size-resArr.length);i++){//top filled with zeros
                    arr[i*size+j] = 0
                }
            }
        case 'left':
            for(var i=0;i<size;i++){ //row (i,j)
                let iniArr = []
                for(var j=0;j<size;j++){ //row
                    if(arr[i*size+j]!=0){
                        iniArr.push(arr[i*size+j])
                    }
                }
                let [score,resArr] = this.shiftArr(iniArr)
                moveScore += score
                var k = 0
                for(var j=0;j<resArr.length;j++){//from left to right
                    arr[i*size+j] = resArr[k]
                    console.log("pos is " +(i*size+j)+'value is'+resArr[k])
                    k++
                }
                for(var j=resArr.length;j<size;j++){//right filled with zeros
                    arr[i*size+j] = 0
                    console.log("pos is " +(i*size+j)+'value is zero')
                }
            }
            console.log(arr)
        case 'right':
            for(var i=0;i<size;i++){ //row (i,j)
                let iniArr = []
                for(var j=0;j<size;j++){ //row
                    if(arr[i*size+j]!=0){
                        iniArr.push(arr[i*size+j])
                    }
                }
                let [score,resArr] = this.shiftArr(iniArr)
                moveScore += score
                var k = 0
                for(var j=size-resArr.length;j<size;j++){//from right to left
                    arr[i*size+j] = resArr[k]
                    k++
                }
                for(var j=0;j<(size-resArr.length);j++){//left filled with zeros
                    arr[i*size+j] = 0
                }
            }
    }
    return arr
}

shiftArr = function(arr){
    var addScore = 0
    var result = []
    var left = arr[0]
    var len = arr.length
    arr.shift()
    var i = 0
    while(i<len){
        if(arr.length==0){
            result.push(right)
            break
        }
        var right = arr[0]
        arr.shift()
        if(left==right){
            addScore += left*2
            result.push(left*2)
            i+=2
            left = arr[0]
            arr.shift()
        }
        else{
            result.push(left)
            left = right   
            i+=1
        }
    }
    return [addScore, result]
}

//console.log(shiftArr([2,2,4,8]))
console.log("result is" + move([2,2,4,8,4,6,8,8,2,2,4,8,4,6,8,8],'left',4))