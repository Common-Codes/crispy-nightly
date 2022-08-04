window.onload = function(){
    cosnt content = document.getElementById("poster")
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [code, joined, expiry] = [fragment.get('code'), fragment.get('meta'), fragment.get('expire')];

    if(code != null){
        store.collection("guild").where("invite", "==", code)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const guild = doc.data()
                content.innerHTML = `<p>${code}</p>`
            });
        })
    }
}
