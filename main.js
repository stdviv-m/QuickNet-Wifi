// a function that displays an alert when a grid item is clicked
document.addEventListener('DOMContentLoaded', function(){
    const items = document.querySelectorAll('.button');
    items.forEach(items =>{
        items.addEventListener('click', function(){
            alert('you clicked ${item.textContent}');
        })
    })
})
