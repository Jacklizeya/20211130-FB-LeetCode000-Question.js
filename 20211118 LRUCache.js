// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
    constructor(maxSize) {
        this.maxSize = maxSize || 1;
        this.hashMap = {}
        this.linkedList = new doublyLinkedList()
        this.size = 0
    }

    insertKeyValuePair(key, value) {
        // Write your code here.
        if (this.hashMap[key] !== undefined) {
            this.hashMap[key].value = value
					  // revision #4, reassign head and tail
						if (this.hashMap[key]=== this.linkedList.head) {this.linkedList.head = this.linkedList.head.next} 
						if (this.hashMap[key]=== this.linkedList.tail) {this.linkedList.tail = this.linkedList.tail.previous} 
						this.hashMap[key].breakConnectionAndBeSingleNode()
        } else {
            let newNode = new listNode(key, value)
            this.hashMap[key] = newNode
            if (this.size < this.maxSize) {
                this.size++
            } else {
								if (this.linkedList.tail.key) {delete this.hashMap[this.linkedList.tail.key]}
                this.linkedList.removeTail()
            }
        }
        this.linkedList.addHead(this.hashMap[key])
    }

    getValueFromKey(key) {
        // Write your code here.
        if (this.hashMap[key] !== undefined) { 
					// revision #2 update the head (this is using the exact same code for existing case  ---> updating case)
					if (this.hashMap[key]=== this.linkedList.head) {this.linkedList.head = this.linkedList.head.next} 
					if (this.hashMap[key]=== this.linkedList.tail) {this.linkedList.tail = this.linkedList.tail.previous} 
					this.hashMap[key].breakConnectionAndBeSingleNode()	
				  this.linkedList.addHead(this.hashMap[key])
					return this.hashMap[key].value}
        else { return null }
    }

    getMostRecentKey() {
        // Write your code here.
        return this.linkedList.head.key
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    removeTail() {
        if (this.head === this.tail && this.head !== null) {
            this.head = null
            this.tail = null
        } else if (this.head !== this.tail && this.head !== null) {
            this.tail = this.tail.previous
            this.tail.next.breakConnectionAndBeSingleNode()
        }
    }

    addHead(node) {
			  console.log("Going to add Head", node.key, node.value)
        if (this.head === null && this.tail === null) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.previous = node
					  // revision #1
            this.head = node
        }
				console.log("the new head of linked list", this.head.key, "the new tail will be", this.tail.key)
    }
		
}

class listNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.previous = null
        this.next = null
    }

    breakConnectionAndBeSingleNode() {
        if (this.previous) { this.previous.next = this.next }
        if (this.next) { this.next.previous = this.previous }
        this.previous = null
        this.next = null
    }
}



// Do not edit the line below.
exports.LRUCache = LRUCache;
