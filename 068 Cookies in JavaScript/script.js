alert(document.cooker);
document.cookie="name=Anuprash";
document.cookie="age=34";
alert(document.cookie);

let key=prompt('Enter the key:');
let value=prompt('Enter the value:');
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}}`;
alert(document.cookie);