const LSDRadix = (a, updateBars) => {
    let arr = JSON.parse(JSON.stringify(a));
    let curElem = new Map();
    let changes = []
    let rel = arr;
    for (let i = 0; i < String(Math.max(rel)).length; i++) {
        clearMap(curElem);
        let ind = 0;
        for (let elem = 0; elem < rel.length; elem++) {
            ind = parseInt((rel[elem] / (10**i)) % 10);
            curElem.get(ind).push(rel[elem]);
        }
        let temp = [];
        for (let i = 0; i < 10; i++) {
            temp.push(...curElem.get(i));
        }
        changes.push([...temp]);
        rel = temp;
    }
    updateBars(changes);
};

const clearMap = function(map) {
    for (let i = 0; i < 10; i++) map.set(i, []);
}

export default LSDRadix;