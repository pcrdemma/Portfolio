//Gérer le cas des input required
//Gérer la récup des entrées d'input pour les donner dans le bot discord
//Voir si l'on peut gérer l'affichage dans le bot discord (comment on reçoit le message directement)

const form = document.getElementById('form');
console.log(form);
console.log(document.getElementById('message'));
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('message').value;
    

    const webhookUrl = 'https://discordapp.com/api/webhooks/1099359183469555784/OJUNZMawEZv4F_TlWfQgVxvwbQlm3XnYetegVNaBDF8IDIqtJebsWLtAF02j6yehB55S';
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
    })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                console.error(message);
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error(message);

            console.error('Error sending message:', error);
            alert('Failed to send message.');
        });
});