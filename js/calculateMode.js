exports.calculateMode = function(lst) {
    const getCount=(ltr, word)=>{
        let count=0
        for(let i=0; i<word.length; i++){
            if(word[i]===ltr){
                count++
            }
        }
        return count;
    }

    let answer=[]
    let frequency=0
    let my_dic={}
    for (let i=0; i<lst.length; i++){
        let inst= getCount(lst[i], lst)
        my_dic[lst[i]]=inst
        if (inst >frequency){
            frequency= inst
        }
    }
    for (const i in my_dic){
        if (my_dic[i] === frequency){
            if(isNaN(Number(i))){
                answer.push(i)
            }
            else{
                
                answer.push(Number(i))
            }
        }
    }
    console.log(answer)
    return answer;
}
