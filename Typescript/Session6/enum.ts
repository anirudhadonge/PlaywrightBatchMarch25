
enum monthName{
    Jan='jan',
    Feb='Feb',
    Mar='Mar',
    Apr="apr"
}



function Month(name:string):number{
    switch(name){
        case 'jan':
            return 31;

        case 'Feb':
            return 28;

        case 'Mar':
            return 31;
        case 'apr':
            return 30;
        default:
            return 41;
    }

    return 0;
}


console.log(Month(monthName.Apr));
