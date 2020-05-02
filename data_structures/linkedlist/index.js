const linked = new LinkedList();

document.getElementById('btnAdd').addEventListener('click', () => {
    const inputValue = document.getElementById('value');

    if (inputValue.value === '') {
        alert("Enter a value");
        return;
    }

    linked.add(inputValue.value);
    inputValue.value = '';

    linked.print();

    document.getElementById('totalElements').textContent = linked.length;
});

document.getElementById('btnRemove').addEventListener('click', () => {
    const inputValue = document.getElementById('value');

    if (inputValue.value === '') {
        alert("Enter a value");
        return;
    }

    linked.remove(inputValue.value);
    inputValue.value = '';

    linked.print();

    document.getElementById('totalElements').textContent = linked.length;
});