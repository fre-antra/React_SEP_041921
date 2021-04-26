/*HOME COMPONENT*/ 
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
        <span class="continue" id="continue-${obj.id}" onclick="showItemPage(event)">Continue Reading</span> 
    </div>`
}

function renderList(category,number){
    const filteredBlog= blogs.filter(obj=>obj.category===category)
    const num= +number
    const list= (num===0)? filteredBlog.slice(): filteredBlog.slice(0,number)
    const html1 = list.map(obj=>renderSummary(obj)).join('')
    const e=document.getElementById(`show${category}`)
    return `
        <section class="section-home-list" id='${category}List'>
            <header>
                <h2>${category}</h2>
                <div class="list-control">
                    <div class="show-per-page">
                        <label for='show${category}'>Show per page:</label>
                        <select name="show${category}" id="show${category}" onchange="pagination(event)" >
                            <option disabled selected></option>
                            <option value='0'>All</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                        </select>
                    </div>
                    <div class="sort-list">
                        <label for='sort'>Sort:</label>
                        <select id='sort'>
                            <option value='Most Recent'>Recent</option>
                            <option value='Oldest'>Oldest</option>
                        </select>
                    </div>
                </div>
            </header>
            <div class="list">
                ${html1}
            </div>
        </section>
    `
}

function renderHomePage(array){
    HomePage.innerHTML = '';
    const html= array.map(obj=>renderList(obj.category,obj.number)).join('')
    HomePage.innerHTML += html
}

/*ITEM COMPONENT */
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
                <p>${date} by <a href="/user-${userId}" target="_blank">${user.name}</a></p>
            </header>
            <div>
                ${intro}
            </div>
            <div>
                <h2>Heading</h2>
                <p>${bodyIntro}</p>
                ${html1}
            </div>
            <div class='nav-item'>
                <div>
                    <button id='pre-btn' onclick='switchItemPage(event)'>NEWER POST</button>
                    <button id='next-btn'onclick='switchItemPage(event)'>OLDER POST</button>
                </div>
                <span onclick="switchPage()">
                    HOME PAGE <i class="fa fa-home"></i>
                </span>
            </div>
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
            <div class="social-accounts">
                <a href="http://${obj.github}" target="_blank"><i class="fa fa-github"></i></a>
                <a href="http://${obj.twitter}" target="_blank"><i class="fa fa-twitter"></i></a>
                <a href="http://${obj.linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>
        </div>
    `
}