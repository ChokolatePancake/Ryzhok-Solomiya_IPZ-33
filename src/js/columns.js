const container = document.querySelector('.portfolio__container');
const items = Array.from(container.children);
function getColumnCount() {
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}
const columns = getColumnCount();
const reorderedItems = Array.from({ length: columns }, () => []);

// Distribute items across columns
items.forEach((item, index) => {
    reorderedItems[index % columns].push(item);
});

// Flatten the reordered items to place them back into the container
container.innerHTML = '';
reorderedItems.flat().forEach(item => container.appendChild(item));