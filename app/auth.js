auth.onAuthStateChanged(user => {
    if (user) {
      store.collection('guilds').get().then(snapshot => {
        setupGuilds(snapshot.docs, user);
        setupUI(user);
        setupBadges(user);
      }, err => {
        window.alert(err.message)
      });
    } else {
      setupGuilds([])
      setupUI();
      document.getElementById('guild-title-display').innerText = 'You Must First Log In To Access Crispy'
    }
  })

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    document.location.href = 'https://common-codes.github.io/crispy-nightly/';
  })
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  }).then(function(){location.reload()}, 5000);

});