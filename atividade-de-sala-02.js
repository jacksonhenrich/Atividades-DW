let result = '';

for (let flag = 99; flag >= 0; flag--) {
    if (flag < 10) result += '0';
    result += flag;
    result += flag % 10 === 9 ? '\n' : ',';
}

console.log(result);