function foobar() {
    let new_el = document.createElement('p');
    new_el.innerHTML = 'Amazing Stuff';
    document.getElementsByClassName('content')[0].append(new_el);
}

// adding an event listener
// how one organises this in large projects is curious
document.getElementById('big-button').addEventListener('click', foobar);