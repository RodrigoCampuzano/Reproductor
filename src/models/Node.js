export class Node {
    data

    constructor(data){
        this.data = data
        this.next = null;
        this.prev = null;
    }
    getData () {
        return this.data
    }
}