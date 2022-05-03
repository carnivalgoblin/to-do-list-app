function newItem() {
    /* ADD ITEM */
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must enter something!');
    } else {
        $('#list').append(li);
    }


    /* STRIKE OUT */
    function strikeOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function strikeOut() {
        li.toggleClass('strike');
    });

    /* DELETE */
    let deleteButton = $('<deleteButton></deleteButton>');

    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);
    deleteButton.on('click', deleteItem);

    function deleteItem() {
        li.addClass('delete');
    }

    /* REORDER */
    $('#list').sortable();
}
