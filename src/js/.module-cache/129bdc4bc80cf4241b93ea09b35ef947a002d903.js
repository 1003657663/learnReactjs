/**
 * Created by songchao on 16/6/15.
 */
function extend(obj1,obj2){
    for(var key in obj2){
        if(obj1.hasOwnProperty(key))
            continue;
        obj1[key] = obj2[key];
    }
    return obj1;
}
