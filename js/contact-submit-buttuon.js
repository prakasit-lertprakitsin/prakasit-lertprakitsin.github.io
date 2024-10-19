const sendBtn = document.getElementById('send-button'),
    loader = document.getElementById('loader'),
    textarea = document.getElementById('messageInput');



sendBtn.addEventListener('click', () => {
    document.getElementById('real-button').click();
    loader.style.display = 'inline-block';

    loader.classList.remove('loader');
    loader.offsetHeight;
    loader.classList.add('loader');
});


// textarea will drop down
textarea.addEventListener('click', () => {
    textarea.style.height = '100px';
});

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting

    const nameInput = document.getElementById('nameInput').value;
    const subjectInput = document.getElementById('subjectInput').value;
    const messageInput = document.getElementById('messageInput').value;

    if (nameInput !== "") {
        const mailtoLink = `mailto:${'prakasit.lertprakitsin@gmail.com'}?subject=${encodeURIComponent(subjectInput)}&body=${encodeURIComponent("Hi, my name is " + nameInput + "\n\n" + messageInput)}`;

        const emailAnchor = document.getElementById('emailAnchor');

        if (emailAnchor) {
            emailAnchor.href = mailtoLink;

            emailAnchor.click();
        }
    } else {
        alert("Please enter a valid email address.");
    }
}