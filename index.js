async function whole(){

    function start(){
    // variables intialization and some other works down here!!!!!!!
    let document_width = Math.max(
        document.body.scrollWidth,
        document.body.clientWidth
    )
    let document_height = Math.max(
        document.body.scrollHeight,
        document.body.clientHeight
    )
    let whole = document.getElementById('whole')
    let image_1 = document.getElementById('image-1')
    let image_2 = document.getElementById('image-2')
    let images = document.querySelectorAll('.images')
    let big = document.querySelectorAll('.big')
    let text_sections = document.querySelectorAll('.text-sect')
    let head = document.getElementById('head')
    let icons = document.querySelectorAll('.icons')
    let limit_of_width = 800
    let whole_cont_css = getComputedStyle(whole)
    let whole_cont_height = whole_cont_css.height.replace('px', '')

    // Responsive and adjustable variables making process down here!!!!!!!!!!!!
    let whole_width = document_width/4.5
    let whole_height = whole_cont_height/10

    // Responsive and adjustable making process down here!!!!!!!!!!!!
    whole.style.width = `${whole_width}px`
    whole.style.display = 'none'
    whole.style.fontSize = `${whole_width/30}px`
    whole.style.lineHeight = `${whole_width/20}px`
    image_1.style.width = `${whole_width}px`
    image_1.style.height = `${whole_height + 200}px`
    image_2.style.width = `${whole_width/2}px`
    image_2.style.height = `${whole_height + 200}px`
    big.forEach(biggy=>{
        biggy.style.fontSize = `${whole_width/20}px`
    })
    head.style.fontSize = `${whole_width/20}px`
    if (document_width >= 1050){
        images.forEach(img=>{
            img.addEventListener('mouseover', function(){
                img.style.padding = '4px'
            })
            img.addEventListener('mouseleave', function(){
                img.style.padding = '0px'
            })
        })
        icons.forEach(icon=>{
            icon.addEventListener('mouseover', function(){
                icon.style.transform = 'translateY(-6px)'
            })
            icon.addEventListener('mouseleave', function(){
                icon.style.transform = 'translateY(0px)'
            })
        })
    }
    }
    let promise = new Promise((resolve, reject)=>{
        start();
    })
    await promise
}
whole()
let whole_cont = document.getElementById('whole')
whole_cont.style.display = 'inline'
console.log('hidden only');

