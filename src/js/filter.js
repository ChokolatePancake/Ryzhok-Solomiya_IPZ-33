document.querySelectorAll('.portfolio__block').forEach(block => {
    const type = block.querySelector('.portfolio__type p').textContent.toLowerCase();
    // Map categories to data-name values
    let dataName;
    switch(type) {
        case 'веб-сайт':
            dataName = 'web';
            break;
        case 'додаток':
            dataName = 'app';
            break;
        case 'дизайн':
            dataName = 'design';
            break;
        case 'маркетинг':
            dataName = 'marketing';
            break;
        default:
            dataName = 'all';
    }
    block.setAttribute('data-name', dataName);
});

// Filter functionality
const filterBtn = document.querySelectorAll('.portfolio__button button');
const blocks = document.querySelectorAll('.portfolio__block');

const filterBlocks = (e) => {
    document.querySelector('.portfolio__button button.active')?.classList.remove('active');
    e.target.classList.add('active');

    blocks.forEach(block => {
        if (block.dataset.name !== e.target.dataset.name && e.target.dataset.name !== 'all') {
            block.classList.remove('show');
            block.classList.add('hide');

            block.addEventListener('transitionend', function(event) {
                if (event.propertyName === 'opacity' && block.classList.contains('hide')) {
                    block.classList.add('hidden');
                    block.classList.remove('hide');
                }
            }, { once: true });
        } else {
            block.classList.remove('hidden');
            block.classList.remove('hide');
            setTimeout(() => block.classList.add('show'), 10);
        }
    });
};

// Add click event listeners to all filter buttons
filterBtn.forEach(button => button.addEventListener('click', filterBlocks));

// Set "All" button as initially active
document.querySelector('.portfolio__button button[data-name="all"]').classList.add('active');