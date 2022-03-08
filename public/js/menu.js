export const menu = document.getElementById('menu');
export const menuButton = document.getElementById('menuButton');
export function handleDocumentClick(e) {
    const target = e.target;
    const isOpen = menu.dataset.isOpen || 'false';
    const open = () => {
        menu.classList.add('open');
        menu.dataset.isOpen = 'true';
    };
    const close = () => {
        menu.classList.remove('open');
        menu.dataset.isOpen = 'false';
    };
    if (JSON.parse(isOpen) === false && (menuButton.contains(target) || target === menuButton))
        open();
    if (menu.contains(target) || (!menu.contains(target) && JSON.parse(isOpen) === true))
        close();
}
