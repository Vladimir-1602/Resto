
let bg = document.querySelector('.icons__pepper');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px) rotate(' + x * 30 + 'deg)';
});

let bg1 = document.querySelector('.icons__pos');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg1.style.transform = 'translate(' + x * 40 + 'px, ' + y * 40 + 'px) rotate(-' + x * 30 + 'deg)';
});

let bg2 = document.querySelector('.icons__circle_2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg2.style.transform = 'translate(' + x * 40 + 'px, ' + y * 40 + 'px) rotate(' + x * 30 + 'deg)';
});

let bg3 = document.querySelector('.icons__circle_1');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg3.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 40 + 'px) rotate(-' + x * 30 + 'deg)';
});

let bg4 = document.querySelector('.icons__circle_3');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg4.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 40 + 'px) rotate(-' + x * 30 + 'deg)';
});

let bg5 = document.querySelector('.icons__list');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg5.style.transform = 'translate(' + x * 100 + 'px, -' + y * 100 + 'px) rotate(-' + x * 30 + 'deg)';
});

let bg6 = document.querySelector('.icons__onion');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg6.style.transform = 'translate(' + x * 100 + 'px, -' + y * 100 + 'px) rotate(-' + x * 50 + 'deg)';
});

let bg7 = document.querySelector('.icons__tomato');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg7.style.transform = 'translate(' + x * 40 + 'px, ' + y * 100 + 'px) rotate(-' + y * 30 + 'deg)';
});

let bg8 = document.querySelector('.icons__nan');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg8.style.transform = 'translate(' + x * 40 + 'px, ' + y * 100 + 'px)';
});


/*let stat = document.querySelectorAll('.stat__bg');
for(let i of stat) {
	window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    stat.style.transform = 'translate(' + x * 40 + 'px, ' + y * 100 + 'px)';
    break;
})};

console.log(stat);*/




let getClass = document.querySelectorAll('.title');
getClass.forEach((item) => item.addEventListener('click', () => {
    const parent = item.parentNode;
    if(parent.classList.contains('active')) {
        parent.classList.remove('active');
    } else {
        document
            .querySelectorAll('.items__column')
            .forEach((child) => child.classList.remove('active'));
        parent.classList.toggle('active');
    }
}))