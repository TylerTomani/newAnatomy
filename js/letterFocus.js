const allEls = document.querySelectorAll('body *')

let textareaFocus = false

addEventListener('keydown' , e => {
    if(!textareaFocus){
        let key = e.key
        allEls.forEach(el => {
            if(el.hasAttribute('id')){
                id = el.getAttribute('id')
                if(id[0] == key){
                    el.focus()
                }
            }
        })
    } else {

        console.log(textareaFocus)
    }
    

})

const textarea = document.querySelector('textarea')
textarea.addEventListener('focus', () => {
    textareaFocus = false
    console.log("focus")
})
textarea.addEventListener('focusout', () => {
    textareaFocus = true
    console.log("out")
})



