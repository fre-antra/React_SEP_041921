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
        <span class="continue" id="continue-${obj.id}" onclick="showItem(event)">Continue Reading</span> 
    </div>`
}

function renderDetails(obj){
    const {userId,title,date,content}= obj
    const {intro,body}= content
    const {bodyIntro,bodyMain}= body
    const user= users.find(u=>u.id===userId)
    const html1= bodyMain.map(obj=>`
        <div>
            <h3>${obj.title}</h3>
            <p>${obj.content}</p>
        </div>
    `).join('')
    return `
        <div>
            <header class='item-header'>
                <div>
                    <h1>${title}</h1>
                </div>
                <p>${date} by <a href="/user-${userId}">${user.name}</a></p>
            </header>
            <div>
                ${intro}
            </div>
            <div>
                <h2>Heading</h2>
                <p>${bodyIntro}</p>
                ${html1}
            </div>
            <div class='nav-item'><span onclick="switchPage()">BACK</span></div>
        </div>
    `
}

function renderUserInfo(obj){
    const html1= archives.map(obj=>`<li><a href='/${obj.code}'>${obj.display}</a></li>`).join('');
    return `
        <div class='about'>
            <h2>About</h2>
            <p>${obj.about}</p>
        </div>
        <div>
            <h2>Archives</h2>
            <ul>${html1}</ul>
        </div>
        <div>
            <h2>Elsewhere</h2>
            <ul>
                <li><a href="http://${obj.github}">GitHub</a></li>
                <li><a href="http://${obj.twitter}">Twitter</a></li>
                <li><a href="http://${obj.linkedin}">LinkedIn</a></li>
            </ul>
        </div>
    
    `
}