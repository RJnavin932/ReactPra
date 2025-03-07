export const validation =(data)=>{
    let error={}
    if(data.uname == ''){
     error.uname='enter the value is empty';
    }
    if(data.uphn == ''){
        error.uphn='enter the value is empty'
    } 
    if(data.ustudy === ''){
        error.ustudy='enter the value is empty';
    }
    if(data.ugender == ''){
        error.ugender='enter the value is empty';
    }
    if(data.uadd == ''){
        error.uadd='enter the value is empty';
    } 
    if(data.ucity == ''){
        error.ucity='enter the value is empty';
    }  
    return error ;
}