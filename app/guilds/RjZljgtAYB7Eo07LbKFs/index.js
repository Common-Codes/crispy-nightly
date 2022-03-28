const guildList = document.getElementById("guild-nav");
const accountDetails = document.querySelector('.account-details');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
    if(user){
      store.collection('users').doc(user.uid).get().then(doc => {
        const html = `
          <div><img src="https://ggpht.ga/icons/${doc.data().img}?size=full" style="height: 48px; width: 48px;"></div>
          <div>Logged in as ${doc.data().name}</div>
          <div>${doc.data().email}</div>
        `;
        accountDetails.innerHTML = html;
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
      })
    } else {
      accountDetails.innerHTML = '';
      loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
    }
  }

const setupGuilds = (data) => {

if(data.length){
    let html = '';
    data.forEach(doc => {
    const guild = doc.data();
    const li = `
        <li>
        <div> <button onclick="location.href='/app/guilds/${guild.uid}';"><img src="http://ggpht.ga/icons/${guild.img}?size=full" style="width: 48px; height: 48px;"></button> </div>
        </li>
    `;
    html += li;
    });
    guildList.innerHTML = html
} else {
    guildList.innerHTML = '<h5 style="color: black;" class="center-align">You must first Log In to access Crispy!</h5>'
}
};

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });