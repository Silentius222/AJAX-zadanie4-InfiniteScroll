let endOfThePage = 0;

const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log(`showPreloader()`);
    preloader.style.display = 'block';
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    console.log(`hidePreloader()`);
    preloader.style.display = 'none';
}

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-users.php')
    .then(res => res.json())
    .then(data => {

        let body = document.body

        for (let user of data){
            let pId = document.createElement('p');
            let pName = document.createElement('p');
            let pWebsite = document.createElement('p');

            pId.innerText = `User ID: ${user.id}`;
            pName.innerText = `User Name: ${user.name}`;
            pWebsite.innerText = `USer URL: ${user.pWebsite}`;



            body.appendChild(pId);
            body.appendChild(pName);
            body.appendChild(pWebsite);
        }

        hidePreloader();
        console.log(data)
    })

    .catch(error => {
        console.log(error);
    });
}

const scrollEnd = () => {

    let d = document.documentElement;

    let scrollHeight = d.scrollHeight;

    let scrollTop = d.scrollTop;

    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

    console.log(`scrollHeight: ${scrollHeight}`);
    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);
    console.log(`scrollTop: ${scrollTop}`);
    console.log(`clientHeight: ${clientHeight}`);
    console.log(`======================`);

    if (sumScrollTopClientHeight >= scrollHeight) {

        endOfThePage =+ 1;
        console.log(`Scrolled to the end of page: ${endOfThePage}`);

        showPreloader();
        getData();
    }

}

window.addEventListener('scroll', scrollEnd);