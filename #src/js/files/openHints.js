let parent = document.querySelector('.hints');
if(parent) {
    let hint = document.querySelectorAll('.hint');
    parent.addEventListener('click', (event) => {
        console.log(event)
        let target = event.target;
        if (target.closest('.hint')) {
            for (let i = 0; i < hint.length; i++) {
                hint[i].classList.remove('active');
            }
            target.closest('.hint').classList.add('active');
        }
    });
}