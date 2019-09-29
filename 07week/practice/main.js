const authorArray = []

function createNode(element){
        return document.createElement(element)
}

function append(parent, el){
        return parent.appendChild(el)
}

const ul = document.getElementById('author_list')

const url = 'https://randomuser.me/api/?results=10'

fetch(url)
.then((resp) => resp.json())
.then(function(data){
    let author = data.results
    authorArray.push(data.results)

    return author.map(function(author){
        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span')
        button = document.createElement('button');

        img.src = author.picture.medium
        span.innerHTML = `${author.name.first} ${author.name.last}`;
        button.innerHTML = 'Contact User'
        button.onclick = function(){alert(`${author.location.street} ${author.location.city} ${author.location.state} ${author.location.postcode} ${author.dob.age} ${author.dob.date}`
        )}
        
        append(li,img)
        append(li, span)
        append(ul, li, span)
        append(ul, li)
        
        append(span, button)
    })

})

.catch(function(error){
    console.log(JSON.stringify(error))
})

console.log(authorArray)