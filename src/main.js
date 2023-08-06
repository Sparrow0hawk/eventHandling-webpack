function foobar() {
    let new_el = document.createElement('p');
    new_el.innerHTML = 'Amazing Stuff';
    document.getElementsByClassName('content')[0].append(new_el);
}

// not sure if this is evil
window.foobar  = foobar;