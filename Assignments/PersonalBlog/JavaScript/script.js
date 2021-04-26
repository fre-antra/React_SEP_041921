const HomePage= document.getElementById('blog-home-page')
const ItemPage= document.getElementById('blog-item-page')

let postIndex;

/*HELPERS*/
function renderContent(container,id,renderTemplate,param){
    const html= renderTemplate(param)
    const ele= document.createElement('section')
    ele.id= id;
    ele.innerHTML +=html
    container.appendChild(ele)
}

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

function showItem(index){
    ItemPage.innerHTML='';
    const item= blogs[index]
    const user= users.find(u=>u.id===item.userId)
    renderContent(ItemPage,'left',renderDetails,item)
    renderContent(ItemPage,'right',renderUserInfo,user)
    checkPost(blogs,index)
}

function showPaginatedList(id,value){
    const category= categories.find(obj=>obj.id===id)
    category.number= value
    renderHomePage(categories)
}

/*EVENT LISTENERS */
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

function pagination(event){
    event.preventDefault();
    const {id,value}= event.target
    //const e= document.querySelector(`option[value="${value}"]`)
    showPaginatedList(id,value)
}

(function runHomePage(){
    renderHomePage(categories)
    
})();
