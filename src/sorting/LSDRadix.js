const LSDRadix = (a, updateBars) => {
    let arr = JSON.parse(JSON.stringify(a));
    let curElem = new Map();
    let curElemIndex = new Map();
    let changes = []
    let rel = arr;
    for (let i = 0; i < String(Math.max(rel)).length; i++) {
        clearMap(curElem);
        clearMap(curElemIndex);
        let ind = 0;
        for (let elem = 0; elem < rel.length; elem++) {
            ind = parseInt((rel[elem] / (10**i)) % 10);
            curElem.get(ind).push(rel[elem]);
            curElemIndex.get(ind).push(elem);
        }
        let c = 0;
        
        for (let i = 0; i < 10; i++) {
            for (let g = 0; g < curElem.get(i).length 
                && curElem.get(i).length !== rel.length; g++) {
                rel[c] = curElem.get(i)[g];
                changes.push([...rel]);
                c++;
            }
        }       
    }
    updateBars(changes);
};

const clearMap = function(map) {
    for (let i = 0; i < 10; i++) map.set(i, []);
}

export default LSDRadix;