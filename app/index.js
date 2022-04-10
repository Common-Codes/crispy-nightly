const guildList = document.getElementById("guild-nav");
const navBar = document.getElementById("navbar");
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountFolio = document.querySelector('.guilds');
const accountDetails = document.querySelector('.account-details');
const accountBadges = document.querySelector('.account-badges');
const messageArea = document.querySelector('.message-area')

const setupBadges = (user) => {
  if(user){
    store.collection('users').doc(user.uid).get().then(doc => {
      const html = `
      <div class="_category_sso5v_101">Badges</div>
      <div class="modal-content UserBadges__BadgesBase-sc-1ubexy3-0 gMJfVq" style="display: flex;">
        <div style="display: flex;">
          <img src="https://www.svgrepo.com/show/182103/badge-medal.svg" style="height: 26px; width: 26px;">
        </div>
        <div style="display: flex;">
          <img src="https://www.svgrepo.com/show/193147/badge.svg" style="height: 26px; width: 26px;">
        </div>
      </div>
      `;
      accountBadges.innerHTML = html;
    })
  }
}

const setupUI = (user) => {
  if(user){
    store.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <div><img src="https://ggpht.ga/icons/${doc.data().img}?size=full" style="height: 48px; width: 48px;"></div>
        <div>Logged in as ${doc.data().name}</div>
        <div>${doc.data().email}</div>
      `;
      accountDetails.innerHTML = html;
      accountFolio.innerHTML = html;
    })
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    accountDetails.innerHTML = ''
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

const setupGuilds = (data) => {

  if(data.length){
    navBar.style.display = 'block'
    let html = '';
    data.forEach(doc => {
      const guild = doc.data();
      const li = `
        <li>
          <div> <button alt="${guild.title}" style="transform: rotate(-90deg) translate(-7%, 0);" onclick="location.href='/app/guilds/${guild.uid}';"><img alt="${guild.title}" src="http://ggpht.ga/icons/${guild.img}?size=full" style="width: 48px; height: 48px;"></button> </div>
        </li>
      `;
      html += li;
    });
    guildList.innerHTML = html
  } else {
    guildList.style.display = 'none'
    navBar.style.display = 'none'
    
  }
};

document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});