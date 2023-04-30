(() => {
    const h2 = document.querySelector('h2');
    h2.style.color = 'orange';
    document.querySelector('body').addEventListener('click', function () {
        h2.style.color = 'green';
    });
})();