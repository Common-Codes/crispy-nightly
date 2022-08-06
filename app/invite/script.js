window.onload = function(){
    const content = document.getElementById("poster")
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [code, joined, expiry] = [fragment.get('code'), fragment.get('meta'), fragment.get('expire')];

    if(code != null){
        store.collection("guilds").where("invite", "==", code)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const guild = doc.data()
                content.innerHTML = `<p>You have been invited to join ${guild.title} on Crispy!</p>`
                document.body.style.backgroundImage = `url('${guild.banner}')`;
            });
        })
    }
}
