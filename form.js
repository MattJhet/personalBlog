const usernameEl = document.getElementById('person');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
const formEl = document.getElementById('awesomeForm');

// fixed typo error
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const titleValue = titleEl.value;
    const usernameValue = usernameEl.value;
    const contentValue = contentEl.value;

    const blogInfo = {
        username: usernameValue,
        title: titleValue,
        content: contentValue
    }
    
    localStorage.setItem('title', titleValue);
    localStorage.setItem('usernameEl', usernameEl);
    localStorage.setItem('content', contentValue);
    console.log('test');
    localStorage.setItem('form', JSON.stringify(blogInfo));
});
