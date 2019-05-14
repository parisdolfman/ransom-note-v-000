function buildHistogram(mag){
    //key value pair where key = letter in magazine and value is frequency of letter

    let hash = {}

    for (let el of mag){
      //console.log(hash)
      if(!hash[el]){ //if value of key('a') doesnt exist
        hash[el] = 1  //set key to value of 1
      }else{
        hash[el] += 1
      }
    }
    return hash
}
