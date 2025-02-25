function contact(type) {
    switch(type) {
        case 'email':
            window.location.href = 'aldiansyah54364@gmail.com'; // Replace with your actual email
            break;
        case 'github':
            window.open('https://github.com/aldiansy10', '_blank'); // Replace with your GitHub username
            break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/yourusername', '_blank'); // Replace with your LinkedIn username
            break;
        default:
            console.log('Unknown contact type');
    }
}