


// dateformat('YYYY-MM-DD E')
// dateformat('YYYY-MM-DD')
// dateformat('YYYY-MM-DD a/p hh시 mm분 ss초 E')
// dateformat('MM월 dd일')
// 0채우기 함수는 padStart 함수를 쓰자
export const DateFormat = (date : Date ,format : string) : string => {
    let weekName = ['일요일', '월요일', '화요일' , '수요일', '목요일' , '금요일', '토요일']

    
    return format.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1 : string) : string {
        switch ($1) {
            case "yyyy": return date.getFullYear().toString();
            case "yy": return (date.getFullYear() % 1000).toString().padStart(2, '0');
            case "MM": return (date.getMonth() + 1).toString().padStart(2, '0');
            case "dd": return date.getDate().toString().padStart(2, '0');
            case "E": return weekName[date.getDay()];
            case "HH": return date.getHours().toString().padStart(2, '0');
            case "mm": return date.getMinutes().toString().padStart(2, '0');
            case "ss": return date.getSeconds().toString().padStart(2, '0');
            case "a/p": return date.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
    
}

export default DateFormat;
