const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const year = document.querySelector('#year');
const loading = document.querySelector('#loading');
const h1 = document.querySelector('#h1');
const btn_container = document.querySelector('#btn-container');


const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00:00`);

//set background year
year.innerText = currentYear + 1;

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

const changeBg = () => {
    fetch('https://api.unsplash.com/photos/random?client_id=gfXzHUZJnwnsObUFyB0hxiOMXrt_nA4V7UyjpCrRK6w')
        .then(response => response.json())
        .then(data => {
            console.log(data.urls.regular);
            const bgEl = document.querySelector('body');
            bgEl.style.backgroundImage = `url('${data.urls.regular}')`;
        })
}

fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // menambahkan quote secara default
        const root = document.querySelector('.quote-area');
        const randoms = Math.floor(Math.random() * data.length);
        root.innerHTML = `
                    <p>"${data[randoms].text}"</p>
                    <p>-- ${data[randoms].author} --</p>
                `

        // ketika diklik maka akan generate quote baru
        document.querySelector('.button').addEventListener('click', function () {
            const random = Math.floor(Math.random() * data.length)
            if (data[random].author === null) {
                root.innerHTML = `
                    <p>"${data[random].text}"</p>
                    <p>-- ${data[random].author = 'Unknown'} --</p>
                `
            } else {
                root.innerHTML = `
                    <p>"${data[random].text}"</p>
                    <p>-- ${data[random].author} --</p>
                `

            }



        })


    });


document.querySelector('.button2').addEventListener('click', changeBg);









setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
    h1.style.display = 'flex';
    btn_container.style.display = 'flex';
    year.style.display = 'flex';
}, 1000)
setInterval(updateCountdown, 1000);