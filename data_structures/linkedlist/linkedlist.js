function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

LinkedList.prototype.add = function(value) {
    let newNode = new Node(value);
    if (this.head == null && this.tail == null) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }
    this.length++;
}

LinkedList.prototype.remove = function(value) {
    if (this.head == null && this.length == 0) {
        alert("Linked List is empty");
        return;
    } else if (this.head.value === value) {
        this.head = this.head.next;
    } else {
        let curr = this.head,
            prev = null;
        while (curr.next && value != curr.value) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
    }
    this.length--;
}

LinkedList.prototype.print = function() {
    this.cleanDomLinkedList();

    let curr = this.head;
    while (curr != null) {
        this.addDomNode(curr.value);
        curr = curr.next;
    }

    this.addDomNode("null");
}

LinkedList.prototype.addDomNode = function(value) {
    const colElement = document.createElement('div');
    const nodeElement = document.createElement('div');

    colElement.setAttribute('class', 'col-md-1');

    nodeElement.textContent = value;
    if (value === "null")
        nodeElement.setAttribute('class', `null node_${value}`);
    else
        nodeElement.setAttribute('class', `node node_${value}`);

    colElement.appendChild(nodeElement);

    document.getElementById('linkedList').appendChild(colElement);

}

LinkedList.prototype.cleanDomLinkedList = function() {
    const div = document.getElementById('linkedList');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}