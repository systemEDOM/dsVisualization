var initialPositionX = 0;

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

LinkedList.prototype.print = function() {
    this.cleanDomLinkedList();

    let curr = this.head;
    while (curr != null) {
        this.addDomNode(curr.value);
        curr = curr.next;
    }

    this.addDomNode("N");
}

LinkedList.prototype.addDomNode = function(value) {
    const nodeElement = document.createElement('div');
    nodeElement.textContent = value;
    if (value === "N")
        nodeElement.setAttribute('class', `null node_${value}`);
    else
        nodeElement.setAttribute('class', `node node_${value}`);

    document.getElementById('linkedList').appendChild(nodeElement);

    anime({
        targets: `.node_${value}`,
        translateX: initialPositionX,
        duration: 2000,
    });


    initialPositionX += 40;
}

LinkedList.prototype.cleanDomLinkedList = function() {
    const div = document.getElementById('linkedList');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    initialPositionX = 0;
}