//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
//Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
//Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
//Input: 07:05:45PM
//Output: 19:05:45

timeConversion('07:05:45PM');

function timeConversion(s) {
    var separator = ':';    
    var str = s.substring(0,s.length-2); //get hh:mm:ss    
    str= str.split(separator); //get array [hh,mm,ss]    
    var ampm = s.slice(-2); //get AM/PM        
    
    var hh = parseInt(str[0],10);    
    
    if (hh===12) {
        hh=0;
    }
    
    if (ampm.toLowerCase()==='pm') {
        hh+=12;
    }
    
    if (hh<10) {
        hh='0'+hh;
    }
    
    var result=hh.toString()+':'+str[1].toString()+':'+str[2].toString();
    return result;
}
