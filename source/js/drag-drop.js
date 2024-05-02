dragItems = {}
dropBoxs = {}
 function addEvents()
 {
    dragItems = document.querySelectorAll('.drag')
    dropBoxs = document.querySelectorAll('.drop_item')
   
    console.log(dragItems, dropBoxs)

    dragItems.forEach(item => {
        item.addEventListener('dragstart', dragStart)
        item.addEventListener('dragend', dragEnd)
    
    })
    
    dropBoxs.forEach(box => {
        box.addEventListener('dragover', dragOver)
        box.addEventListener('drop', dropEvent)
        box.addEventListener('dragleave', dragleave)
    })

 }

 function removeEvents()
 {
   

    dragItems.forEach(item => {
        item.removeEventListener('dragstart', dragStart)
        item.removeEventListener('dragend', dragEnd)
    
    })
    
    dropBoxs.forEach(box => {
        box.removeEventListener('dragover', dragOver)
        box.removeEventListener('drop', dropEvent)
        box.removeEventListener('dragleave', dragleave)
    })

 }

 addEvents()




function dragStart(e)
{


    setTimeout(() => {
        this.className = 'invisible'
      
    }, 0);

}

function dragleave(e)
{
    e.preventDefault()
    var classnames = this.className

    classnames = classnames.replaceAll('enter','')

    this.className = classnames
}

function dragOver(e)
{
    e.preventDefault()
    this.className += ' enter'
}

function dropEvent(e)
{
    e.preventDefault()

    const invi = document.querySelectorAll('.invisible') 

    invi[0].className = 'drag'

    const divPai = invi[0].parentElement;

    divPai.className = 'drop_item'

    this.prepend(invi[0])

    this.className = 'drag_item'

    removeEvents()
    addEvents()

    

}

function dragEnd(e)
{
    e.preventDefault()

    const invi = document.querySelectorAll('.invisible') 

    if(invi.length > 0){

        invi.forEach((item)=>{
            item.className = 'drag'
        })
    }


}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var body = document.getElementById('body')

    body.innerHTML = '<p>Disponível somenete em desktop...</p>'
   }