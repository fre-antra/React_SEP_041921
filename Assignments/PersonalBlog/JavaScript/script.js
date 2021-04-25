const HomePage= document.getElementById('blog-home-page')
const ItemPage= document.getElementById('blog-item-page')

function switchPage () {
    ItemPage.innerHTML='';
    ItemPage.classList.toggle('hidden');
    HomePage.classList.toggle('hidden');
}

function renderList(category,number){
    const filteredBlog= blogs.filter(obj=>obj.category===category)
    const list= (number>=filteredBlog.length)? filteredBlog: filteredBlog.slice(0,number)
    const html1 = list.map(obj=>renderSummary(obj)).join('')
    const html2= `
        <section class="section-home-list" id='${category}List'>
            <h2>${category}</h2>
            <div class="list">
                ${html1}
            </div>
        </section>
    `
    HomePage.innerHTML += html2
}
function renderContent(container,id,renderTemplate,param){
    const html= renderTemplate(param)
    const ele= document.createElement('section')
    ele.id= id;
    ele.innerHTML +=html
    container.appendChild(ele)
}

function showItem(event){
    switchPage();
    let itemId= event.target.id.slice(-1)*1
    const item= blogs.find(b=>b.id===itemId)
    const user= users.find(u=>u.id===item.userId)
    renderContent(ItemPage,'left',renderDetails,item)
    renderContent(ItemPage,'right',renderUserInfo,user)
    
}


(function runHomePage(){
    renderList('Travel')
    renderList('Health')
})();
