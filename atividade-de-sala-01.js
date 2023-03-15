let result = '';

for (let flag = 0; flag < 100; flag++) {
    if (flag < 10) result += '0';
    result += flag;
    result += flag % 10 === 9 ? '\n' : ',';
}

console.log(result);