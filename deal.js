const columnCount = 7;

function deal() {
    let n = 0;
    for (let x = 0; x < 7; x++) {
        for (let i = x; i < 7; i++) {
            this.columns[i].append(this.cards[n])
            if (i > x) {
                this.cards[n].reversed = true;
                }
                n++;
            } }

    //    for (let i = 1; i < 7; i++) {
    //        this.columns[i].append(this.cards[n])
    //        if (i > 1) { this.cards[n].reversed = true; }
    //        n++
    //    }
}