const HomePage= document.getElementById('blog-home-page')
const ItemPage= document.getElementById('blog-item-page')

let postIndex;

function checkPost(array,index){
    const preBtn= document.getElementById('pre-btn')
    const nextBtn= document.getElementById('next-btn')
    preBtn.disabled= (index===0)? true: false;
    nextBtn.disabled= (index===array.length-1)? true:false;
}

function switchPage () {
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

function showItem(index){
    ItemPage.innerHTML='';
    const item= blogs[index]
    const user= users.find(u=>u.id===item.userId)
    renderContent(ItemPage,'left',renderDetails,item)
    renderContent(ItemPage,'right',renderUserInfo,user)
    checkPost(blogs,index)
}

function switchItemPage(event){
    const {id}= event.target
    postIndex= (id==='next-btn')? postIndex+1: postIndex-1
    showItem(postIndex)
}

function showItemPage(event){
    switchPage();
    let itemId= event.target.id.slice(-1)*1
    postIndex= blogs.findIndex(b=>b.id===itemId)
    showItem(postIndex)
}


(function runHomePage(){
    renderList('Travel')
    renderList('Health')
})();
