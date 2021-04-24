function renderSummary(obj){
    return `
    <div class="blog">
        <ul class="blog-info">
            <li class="blog-category">${obj.category}</li>
            <li class="blog-title">${obj.title}</li>
            <li class="blog-date">${obj.date}</li>
        </ul>
        <p class="blog-summary">
                ${obj.summary}  
        </p>
        <a href="#item-1">Continue Reading</a> 
    </div>`
}

function renderList(idSelector,category,number){
    const element= document.getElementById(idSelector);
    const filteredBlog= blogs.filter(obj=>obj.category===category)
    const list= (number>=filteredBlog.length)? filteredBlog: filteredBlog.slice(0,number)
    const html = list.map(obj=>renderSummary(obj)).join('')
    element.innerHTML = html
}

(function runHomePage(){
    renderList('travelList','Travel')
    renderList('healthList','Health')
})()




