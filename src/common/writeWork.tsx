import { DateFormat } from '../common/date';
import { WorkInterF } from '../types/commonTypes';


// 해당일자로 출근찍기
export const goWork = () : void => {
    let date = new Date();

    let currDate = DateFormat(date, 'yyyy-MM-dd');
    let currTime = DateFormat(date , 'HH:mm:ss');
    let currDateTime = DateFormat(date , 'yyyy-MM-dd HH:mm:ss');
    console.log('goWork!')
    console.log(currDate.trim())

    const goWorkObject : WorkInterF = {
        'id'       : JSON.parse(localStorage.getItem('user') as string).id,
        'currDate' : currDate.trim(),
        'currTime' : currTime.trim(),
        'currDateTime' : currDateTime.trim(),
    }

    console.log(goWorkObject);

    const localGoWork : WorkInterF[] = JSON.parse(localStorage.getItem('goWork') as string);
    let exists : WorkInterF[] = localGoWork.filter((e) => e.currDate === currDate);
    if(exists.length > 0) {
        localGoWork.filter((e) => e.currDate === currDate)[0].currTime = currTime.trim();
    }
    else {
        localGoWork.push(goWorkObject);
    }
    
    localStorage.setItem('goWork', JSON.stringify(localGoWork));
}

// 해당일자로 퇴근찍기
export const leaveWork = () : void => {
    let date = new Date();
    let currDate = DateFormat(date, 'yyyy-MM-dd');
    let currTime = DateFormat(date , 'HH:mm:ss');
    let currDateTime = DateFormat(date , 'yyyy-MM-dd HH:mm:ss');

    const leaveWorkObject : WorkInterF = {
        'id'       : JSON.parse(localStorage.getItem('user') as string).id,
        'currDate' : currDate.trim(),
        'currTime' : currTime.trim(),
        'currDateTime' : currDateTime.trim(),
    }

    const localLeaveWork : WorkInterF[] = JSON.parse(localStorage.getItem('leaveWork') as string);
    let exists : WorkInterF[] = localLeaveWork.filter((e) => e.currDate === currDate);
    if(exists.length > 0) {
        localLeaveWork.filter((e) => e.currDate === currDate)[0].currTime = currTime.trim();
    }
    else {
        localLeaveWork.push(leaveWorkObject);
    }
    localStorage.setItem('leaveWork', JSON.stringify(localLeaveWork));
}

// 해당일자 출근데이터 가져오기
export const getGoWork = (date : Date) : string => {
    if(!localStorage.getItem('goWork') || localStorage.getItem('goWork') == '[]' ) {
        return "";
    }

    let goWorkDataArr : WorkInterF[] = JSON.parse(localStorage.getItem('goWork') as string).filter((e : WorkInterF) => e.currDate === DateFormat(date, 'yyyy-MM-dd'));
    let goWorkData : WorkInterF = goWorkDataArr[0];
    return goWorkData.currTime;
}

// 해당일자 퇴근데이터 가져오기
export const getLeaveWork = (date : Date) : string => {
    if(!localStorage.getItem('leaveWork') || localStorage.getItem('leaveWork') == '[]') {
        return "";
    }

    let leaveWorkDataArr : WorkInterF[] = JSON.parse(localStorage.getItem('leaveWork') as string).filter((e : WorkInterF) => e.currDate === DateFormat(date, 'yyyy-MM-dd'));
    let leaveWorkData : WorkInterF = leaveWorkDataArr[0];
    return leaveWorkData.currTime;
}

export default { goWork , leaveWork}