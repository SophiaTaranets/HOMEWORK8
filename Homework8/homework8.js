// **************** Task1 **************** 
    function checkRegistr(str){
        const regExp = /^[A-Z]$/;
        const res = regExp.test(str[0]);
        if (res){
            console.log("String starts with uppercase character ");
        } else {
            console.log("String doesn`t start with uppercase character ");
        }
    }
    console.log('Task 1');
    checkRegistr('regexp');
    checkRegistr('RegExp');
    checkRegistr('tegExp');
    checkRegistr('Rei');
    console.log('\n');

// **************** Task2 **************** 

function checkEmail (email){
    const regularExp = /\S+@\S+\.\S+/;
    console.log(regularExp.test(email));
}
console.log('Task 2');
checkEmail("Qmail2@gmail.com");
console.log('\n');

// **************** Task3 **************** 

const myRe = /d(b+)(d)/i;
const myList = myRe.exec("cdbBdbsbz");
console.log('Task 3');
console.log(myList);
console.log('\n');

// **************** Task4 **************** 

const reg = /(\w+)\s(\w+)/;
const string = "Java Script";
const newString = string.replace(reg,"$2, $1");
console.log('Task 4');
console.log(newString);
console.log('\n');

// **************** Task5 **************** 

function checkBankCard(str){
    const reExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const res = reExp.test(str);
    if (res){
        console.log("Correct!");
    } else {
        console.log("False! Please, try again. Incorrect data!");
    }
}
console.log('Task 5');
checkBankCard('1234-5678-9101-1213');
checkBankCard('1234-5678c-9101-1213');
checkBankCard('12342-5678-9101-1213');
console.log('\n');

// **************** Task6 ****************

function checkEmail_(emeil_){
    const mailPattern = /^[a-zA-z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if(mailPattern.test(emeil_)){
        console.log("Email is correct!");
    }
    else{
        console.log("Email is NOT correct!");
    }
} 
console.log('Task 6');
checkEmail_('my_mail@gmail.com');
checkEmail_('#my_mail@gmail.com');
checkEmail_('my_ma--il@gmail.com');
console.log('\n');

// **************** Task7 ****************

function checkLogin(login){
    const re = /^[a-zA-Z]{1}[a-zA-z0-9\.]{1,9}$/;
    const reqNumber = /[0-9\.]+/g;
    const resultNumber = login.match(reqNumber);
    const result = re.test(login);
    console.log(`${login} is ${result}-${resultNumber}`);
}
console.log('Task 7');
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
console.log('\n');
