export class List {
    constructor(title, tags) {
        this.key = Date.now().toString();
        this.title = title;
        this.tags = tags.trim().split(',');
        this.tasks = [];
    }
}
