const linked = new LinkedList();

document.getElementById('btnAdd').addEventListener('click', () => {
    const inputValue = document.getElementById('value');

    if (value === '') {
        alert("Enter a value");
        return;
    }

    linked.add(inputValue.value);
    inputValue.value = '';
});

document.getElementById('btnPrint').addEventListener('click', () => {
    linked.print();
});