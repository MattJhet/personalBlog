const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content')
const formEl = document.getElementById('awesomeForm');

formEl.addEventListener('sumbit', (event) => {
    event.preventDefault();
    
    const titleValue = titleEl.value;
    const usernameValue = usernameEl.value;
    const contentValue = contentValue.el;

    const blogInfo = {
        username: usernameValue,
        title: titleValue,
        content: contentValue
    }

    // localStorage.setItem('title', titleValue);
    // localStorage.setItem('usernameEl', usernameEl);
    // localStorage.setItem('content', contentValue);

    localStorage.setItem('form', JSON.stringify(blogInfo));
})