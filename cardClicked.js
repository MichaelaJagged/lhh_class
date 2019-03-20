function cardClicked(card, column, lastCard, lastColumn) {
    if (card.reversed) {
        card.reversed = false;
        return;
    }
    if (lastCard == null) {
       

        this.remember(card, column);
        card.selected = true;
    }

    else {
    if (card.color == lastCard.color) {
        return;
    }
    
    if (card.value != lastCard.value+1) {
        return;
    }
        let cards = lastColumn.popFrom(lastCard);
        column.append(cards);
        this.forget();
        lastCard.selected = false
    
    }

}