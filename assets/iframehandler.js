function changeIF(page) {
    let target = `/${page}.html`
    fetch(target, { method: "HEAD" }) 
    .then(response => { 
        if (response.ok) { 
            document.getElementById('iframe').src = target
        } else { 
            document.getElementById('iframe').src = `/page/missing.html`
        } 
    }) 
    .catch(error => { 
        console.log("An error occurred: ", error); 
    }); 
}
