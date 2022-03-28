auth.onAuthStateChanged(user => {
    if (user) {
      store.collection('guilds').get().then(snapshot => {
        setupGuilds(snapshot.docs, user);
        setupUI(user);
      }, err => {
        window.alert(err.message)
      });
    } else {
      setupGuilds([])
      setupUI().then(window.onload("/"))
    }
  })