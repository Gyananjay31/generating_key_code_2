let insert = document.querySelector("#insert");

window.addEventListener("keydown" , (event) =>{
    // console.log(event.key);
    // console.log(event.keyCode);
    // console.log(event.code);

    insert.innerHTML = `
    <div class= "key">
        ${event.key === " " ? "Space" : event.key}
        <small class="small">event.key</small>
    </div>
    <div class= "key">
        ${event.code}
        <small class="small">event.keyCode</small>
    </div>
    <div class= "key">
       ${event.keyCode}
       <small class="small">event.code</small>
    </div>
    `;
});
