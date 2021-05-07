// Jquery: facade pattern
      // $('button.continue').html('Next Step...');
      // console.log($('button.continue').html);
class PQuery {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    html(tmp) {
        this.element.innerHTML = tmp;
    }
    show(){
        this.element.style.display = 'block'
    }
    hide(){
        this.element.style.display = 'none'
    }
    toggleClass(str){
        this.element.classList.toggle(str)    
    }
    click(cb){
        this.element.addEventListener('click',cb)
    }
    ajax(){
        
    }
}

const $$ = (selector)=> new PQuery(selector)

$$('button.continue').html('CONTINUE')

$$('.show').click(function(e){
    if ($$('.show').element.innerHTML==='SHOW MSG'){
        $$('.show').html('HIDE MSG')
        $$('#banner-message').show()
    }
    else {
        $$('.show').html('SHOW MSG')
        $$('#banner-message').hide()
    }
    
})
$$('#click-me').click(function(e){
    $$('#click-me').toggleClass('active')
})

//$$('button.continue').html('Next Step...');
//let a = $$('button.continue');
//let aFn = a.html;
//let b = $$('button.continue');
//let bFn = b.html;
//console.log(a === b);
//console.log(aFn === bFn);