function navbar() {
    return `
            <h3>Food App🍕</h3>
            <div id="search_div">
                <input type="search" id="query" placeholder="Search Meal">
                <button id="btn" onclick="search()">Search</button>
            </div>
            <div id="user">
            <h3 id="Signup">SignUp</h3>
            <h3 id="login">LogIn</h3>
            </div>`;
}




function navbar2() {
    return `
            <h3><a href="index.html">Home🍕</a></h3>
            <div id="search_div">
                <input type="search" id="query" placeholder="search meal">
                <button onclick="search()">search</button>
            </div> `;

}

export { navbar, navbar2 };