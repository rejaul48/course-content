document.getElementById('copyrightButton').addEventListener('click', () => {
    const textContainer = document.getElementById('copyrightTextContainer');
    const currentDisplay = window.getComputedStyle(textContainer).display;

    if (currentDisplay === 'none') {
        textContainer.style.display = 'block'; 
    } else {
        textContainer.style.display = 'none';  
    }
});
 