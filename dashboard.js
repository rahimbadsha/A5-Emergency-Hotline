// Heart counter functionality

const hearts = document.querySelectorAll('.card-heart');
hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        let headerHeartCount = document.getElementById('header-heart-count');
        let currentCount = parseInt(headerHeartCount.innerText);
        headerHeartCount.innerText = currentCount + 1;
    });
})

