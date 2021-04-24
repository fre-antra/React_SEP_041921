const HomePage= document.getElementById('blog-home-page')
const ItemPage= document.getElementById('blog-item-page')

function switchPage () {
    HomePage.classList.toggle('hidden');
    ItemPage.classList.toggle('hidden');
}

function renderList(idSelector,category,number){
    const element= document.getElementById(idSelector);
    const filteredBlog= blogs.filter(obj=>obj.category===category)
    const list= (number>=filteredBlog.length)? filteredBlog: filteredBlog.slice(0,number)
    const html = list.map(obj=>renderSummary(obj)).join('')
    element.innerHTML = html
}

function renderLeftSide(item){
    const element= document.getElementById('left')
    const html= renderDetails(item)
    element.innerHTML = html

};

function renderRightSide(user){
    const element= document.getElementById('right')
    const html= renderUserInfo(user)
    element.innerHTML = html
}

function showItem(event){
    let itemId= event.target.id.slice(-1)*1
    const item= blogs.find(b=>b.id===itemId)
    const user= users.find(u=>u.id===item.userId)
    renderLeftSide(item)
    renderRightSide(user);
    switchPage();
}

function hideItem(){
    document.getElementById('')
}

(function runHomePage(){
    renderList('travelList','Travel')
    renderList('healthList','Health')
})();