let details=document.getElementById('newForm');
details.addEventListener('submit',addDetails);
let objCount=0

function addDetails(e){
    e.preventDefault();
    let description=document.getElementById('description');
    let amount=document.getElementById('amount');
    let cat=document.getElementById('cat');
    let li= document.createElement('li')
    li.class='detailsList';
    let rmvbutton=document.createElement('button')
    rmvbutton.id='remove'
    rmvbutton.innerText='Remove'
    
    let editbutton=document.createElement('button')
    editbutton.innerText='Edit'
    editbutton.id='edit'


    li.append(document.createTextNode(amount.value+'-'),document.createTextNode(description.value+'-'),document.createTextNode(cat.value+' '),rmvbutton,editbutton)
    
    let list=document.getElementById('expense')
    list.appendChild(li)

    // Deleting expense
    rmvbutton.onclick= function(e){
        e.preventDefault()
        delNode=e.target.parentNode;
        list.removeChild(delNode)
    }

    //Editing expense
    editbutton.onclick=function(e){
        e.preventDefault()
        console.log(e.target.parentElement)

    }

    // Let make a object to store in a local storage
    let obj={
        amt :amount.value,
        cato:cat.value,
        des:description.value
    }
    objCount++
    
    localStorage.setItem('obj'+objCount,JSON.stringify(obj))
    description.value=''
    amount.value=''

}

