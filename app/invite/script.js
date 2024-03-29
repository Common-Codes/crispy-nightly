window.onload = function(){
    const content = document.querySelector(".details")
    const fragment = new URLSearchParams(window.location.search.slice(1));
    const [code, joined, expiry] = [fragment.get('code'), fragment.get('meta'), fragment.get('expire')];

    if(code != null){
        store.collection("guilds").where("invite", "==", code)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const guild = doc.data()
                if(expiry > Date.now()){
                    content.innerHTML = `<h1>${guild.title}</h1><h6>Rebounce ID: ${guild.uid}</h6><br><br><button onclick="${guild.join}">accept invite</button>`;
                    document.body.style.backgroundImage = `url('${guild.banner}')`;
                } else if(expiry == null){
                    content.innerHTML = `<h1>This invite is invalid or has expired!</h1><p>All invite links have an expiry timestamp at the end, make sure yours does too. Also make sure it's still valid.</p><p style="background-color: lightgray; width: 100%; text-transform: uppercase; text-align: center;">ask for a new invite</p>`;
                } else{
                    content.innerHTML = `<h1>This invite has expired!</h1><button onclick="location.href='/app';">ask for a new invite</button>`;
                }
                
            });
        })
    } else{
        content.innerHTML = `<h1>This invite is invalid or has expired!</h1><p>All invite links have an expiry timestamp at the end, make sure yours does too. Also make sure it's still valid.</p><p style="cursor: pointer; background-color: lightgray; width: 100%; text-transform: uppercase; text-align: center;">ask for a new invite</p>`;
    }
}

function joinFunction(){
    const user = auth.currentUser;
    const fragment = new URLSearchParams(window.location.search.slice(1));
    const code = fragment.get('code');
    if(code != null){
        if(user != null){
            store.collection('guilds').where("invite", "==", code).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const currentGuild = doc.data().uid;
                    store.collection('users').doc(auth.currentUser.uid).collection('joined').doc(code).set({
                        id: `${currentGuild}`
                    })
                })
            })
            setTimeout(function(){location.href='/app'}, 2900)
        } else{
            location.href='/app#'
        }
    } else{
        return;
    }
}
