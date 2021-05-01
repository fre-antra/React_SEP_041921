function functionName(fun) 
{
    var ret = fun.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret;
}

function foo ()
{
    console.log('foo');
}

console.log('The function name is ' + functionName(foo));