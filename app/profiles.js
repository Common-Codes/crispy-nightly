const userDisplay = document.getElementById("modal-extaccount");
const userDetails = document.querySelector('.ext-account-details');
const userBadges = document.getElementById('ext-badge-location');

document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.tagName == "USERNAME"){
        store.collection("users").where("name", "==", element.innerText).get().then((querySnaphot) => {
            querySnaphot.forEach((doc) => {
                const usera = doc.data();
                const userTag = doc.id;
                userDetails.innerHTML = 
                `
                <div><img src="${usera.img}" title="${usera.name}'s profile image" style="height: 48px; width: 48px; border-radius: 50%;"></div>
                <div>Username: ${usera.name}</div>
                <hr>
                <b style="color: crimson">BUG! Use the button below to exit, otherwise badge data may get duplicated.</b><br>
                <button class="btn yellow darken-2 z-depth-0" onclick="closeModal()">Close</button>
                `;
                store.collection("users").doc(userTag).collection("badges").get().then(doc => {
                    doc.forEach(bad => {
                        const badder = `${bad.data().badge}`
                        userBadges.innerHTML += badder;

                    })
                })
                M.Modal.getInstance(userDisplay).open();
            })
        });
    }
});

function closeModal() {
    userBadges.innerHTML = '';
    M.Modal.getInstance(userDisplay).close();
}