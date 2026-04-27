document.querySelectorAll('.lnr-eye').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const input = this.previousElementSibling;

        input.type = input.type === 'password' ? 'text' : 'password';
        
    });
});