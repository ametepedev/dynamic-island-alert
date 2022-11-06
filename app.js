let alerte = document.querySelector('.alerte');
let dynamic_island = document.querySelector('.dynamic-island-alert');
let hide_island = document.querySelector('.reject');

alerte.onclick = function(){
    dynamic_island.classList.toggle('show');
    setTimeout(() => {
        dynamic_island.classList.toggle('full');
    }, 200);
}

dynamic_island.onclick = function(){
    dynamic_island.classList.toggle('active');
}

hide_island.onclick = function(){
    dynamic_island.classList.remove('show');
    dynamic_island.classList.remove('full');
}