window.onload = function(){
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [code, joined, expiry] = [fragment.get('code'), fragment.get('meta'), fragment.get('expire')];

    if(code != null)
}
