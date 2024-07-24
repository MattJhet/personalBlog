//getting form info out of local storage
const blogInfo = JSON.parse(localStorage.getItem('blog'));

//so if the form displays content on that page it should display on blog page
if (blogInfo) {
    const blogPostDiv = document.getElementById('blogPost');
    blogPostDiv.innerHTML = `
        <p>Username: ${blogInfo.username}</p>
        <p>Title: ${blogInfo.title}</p>
        <p>Comment: ${blogInfo.content}</p>
    `;
} else { //if we can find any infortion it should display
    const blogPostDiv = document.getElementById('blogPost');
    blogPostDiv.innerHTML = '<p>No information found in local storage</p>';

};