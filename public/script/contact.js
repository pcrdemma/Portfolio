document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const prenom = document.getElementById('prenom').value;
        const nom = document.getElementById('nom').value;
        const mail = document.getElementById('mail').value;
        const message = document.getElementById('message').value;

        const webhookUrl = 'https://discord.com/api/webhooks/1271457710914928763/hnjDPvKsjIM9XdevK9VaWRdwr5N4EYDUw_-1pLFUl91R6llxwZNlafA2HywDI8TeZh2A';
        
        // Créez un message formaté
        const formattedMessage = `**Contact Form Submission**\n**Prénom:** ${prenom}\n**Nom:** ${nom}\n**Email:** ${mail}\n**Message:** ${message}`;

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: formattedMessage })
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                form.reset(); // Réinitialiser le formulaire
            } else {
                console.error('Failed to send message:', response.statusText);
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
            alert('Failed to send message.');
        });
    });
});
