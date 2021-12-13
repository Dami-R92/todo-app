function isPositive(a) {
    if (a > 0) {
        console.log("YES");
    } else if (a === 0) {
        throw "Zero Error"
    } else {
        throw "Negative Error"
    }
}


function isPositive(a) {
    if (a > 0) {
        console.log("YES")
    } else {
        try {
            if (a > 0) throw "YES";
            if (a == 0) throw "Zero Error";
            if (a < 0) throw "Negative Error";
        } catch (e) {
            console.log (e + " Error");
        }
    }
}
isPositive(0)


function main() {
    const n = +(readLine());

    for (let i = 0; i < n; i++) {
        const a = +(readLine());

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}

function main() {
    const n = +(readLine());

    for (let i = 0; i < n; i++) {
        const a = +(readLine());

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}


function Rectangle(a, b) {

    return {
        length:a,
        width: b,
        perimeter : (a+b)*2,
        area : a*b
    }

}