/*
function renderBlogs(){
    let travelBlogs= $(blogs).filter( blog=>blog.category==='Health')
    console.log(travelBlogs)
    let blogs= travelBlogs.maps(obj=>(`
        <div class="blog">
            <ul class="blog-info">
                <li class="blog-category">${obj.category}</li>
                <li class="blog-title">${obj.title}</li>
                <li class="blog-date">${obj.date}</li>
            </ul>
            <p role="blog-summary">
            ${obj.summary}  
             </p>
            <a href="http://google.com">Continue Reading</a> 
        </div>`
    )).join('')
    $('#healthList').html(blogs)
}

function runApp(){
    renderBlogs();
}
$(runApp);
*/