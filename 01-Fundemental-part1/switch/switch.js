// definiren des Varible
const day = 'freitag';

// switch statment 
switch (day){

case 'montag':
    console.log('geh zur Arbeit');
    break;

case 'dienstag':
    console.log('arbeit mit zenjob');
    break;

case 'mittwoch':
case 'donnerstag':
    console.log('kein Arbeit');
    break;

case 'freitag':
    console.log('go to REWE');
    break;

case 'samstag':
case 'sonntag':
    console.log('Wochenende');
    break;
    
default:
    console.log('es gibt kein passende tag');
}
//// if und else if statment 
/*
if (day === 'montag'){
    console.log('geh zur Arbeit');
} else if (day === 'dienstag'){
    console.log('arbeit mit zenjob');
} else if (day === 'mittwoch' || day === 'donnerstag'){
    console.log('kein Arbeit');
}else if (day === 'freitag') {
    console.log('go to REWE');
}else if (day === 'samstag' || day === 'sonntag') {
    console.log('Wochenende');
} else {
    console.log('es gibt kein passende tag');
}
*/
