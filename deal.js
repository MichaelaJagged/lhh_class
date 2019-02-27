const columnCount = 7;

function deal() {
    let n = 0;

    for (let i = 0; i < 7; i++) {
        this.columns[i].append(this.cards[n])
        if (i > 0) { this.cards[n].reversed = true; }
        n++;
    }
    for (let i = 1; i < 7; i++) {
        this.columns[i].append(this.cards[n])
        if (i > 1) { this.cards[n].reversed = true; }
        n++
    }

}