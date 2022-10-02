const feed = document.querySelector('#feed');

fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then(data => {
        for(let d of data) {
            const content =   `
            <div class="box">
                <h3 class="title">${d.title}</h3>
                <p class="link">${d.link}</p>
            </div>
            `
            feed.insertAdjacentHTML('beforeend', content)
        }
    })
    .catch(err => console.log(err))