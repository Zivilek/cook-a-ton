class RecipeModel {
    constructor(id, name, course, tags, images, source, steps) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.tags = tags || [];
        this.images = images || [];
        this.source = source;
        this.steps = steps || [];
    }
}

export { RecipeModel };