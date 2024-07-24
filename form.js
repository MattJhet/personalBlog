const usernameEl = document.getElementById('person');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
const formEl = document.getElementById('awesomeForm');

// fixed typo error
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // making variable for our values
    const titleValue = titleEl.value;
    const usernameValue = usernameEl.value;
    const contentValue = contentEl.value;

    // storing as a object to make things more efficient
    const blogInfo = {
        username: usernameValue,
        title: titleValue,
        content: contentValue
    }
    
    // adding values to local storage
    // localStorage.setItem('title', titleValue);
    // localStorage.setItem('usernameEl', usernameValue);
    // localStorage.setItem('content', contentValue);
    // console.log('test');
    // only need one local storage now
    localStorage.setItem('blogInfo', JSON.stringify(blogInfo));

    //make sure text in the all the spots are required
    if (usernameEl === '' || titleEl === '' || contentEl === '') {
        window.alert('Error please enter the all text boxes');
        return;
        
    }
    

    const blogPage = "./assets/blog.html";
    window.location = blogPage; 
});



