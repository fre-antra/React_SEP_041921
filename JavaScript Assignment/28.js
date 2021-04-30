function caculateCycleArea(r, square) {
    const Pi = 3.14;
    let area = Pi * square(r);
    return area
}

function square(n) {
    return n * n;
}

caculateCycleArea(2, square);