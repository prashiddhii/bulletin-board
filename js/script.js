document.querySelectorAll('.notice, .announcement').forEach(item => {
    item.addEventListener('click', event => {
        // Add a subtle animation effect
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
        
        const title = item.querySelector('h3').innerText;
        const date = item.querySelector('p').innerText;
        const content = item.querySelectorAll('p')[1].innerText;
        
        // Create a more sophisticated modal instead of using alert
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3>${title}</h3>
                <p class="date">${date}</p>
                <p>${content}</p>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = () => {
            modal.remove();
        };
        
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.remove();
            }
        };
    });
});