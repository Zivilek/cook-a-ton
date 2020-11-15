class RecipeStepModel {
    constructor(seqId, quantity, unit, name, comment) {
        this.seqId = seqId;
        this.quantity = quantity;
        this.unit = unit;
        this.name = name;
        this.comment = comment;
    }
}

export { RecipeStepModel };