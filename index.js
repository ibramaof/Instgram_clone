import { posts } from '/data.js'


//variables
const main = document.getElementById("posts-el")




//post

function renderPost() {
    let renderPost = ''
    for (let postEl in posts) {
        renderPost += `
        <section class="post">
            <div class="post-header">
                <div>
                    <img id="post-user-img" class="post-user-img" src="${posts[postEl].avatar}" alt="avatar-courbet">
                </div>
                <div class="post-header-typography">
                    <p id="name" class="name">${posts[postEl].name}</p>
                    <p id="location" class="location">${posts[postEl].location}</p>
                </div>
            </div>
            <div class="post-container-img">
                <img id="post-img" class="post-img" src="${posts[postEl].post}" alt="post - courbet">
            </div>
            <div class="post-footer">
                <div class="icons">
                    <img id="icons-heart" class="liked" src="images/icon-heart.png" alt="icon-heart">
                        <img id="icons-comment" src="images/icon-comment.png" alt="icon-comment">
                            <img id="icons-dm" src="images/icon-dm.png" alt="icon-dm">
                            </div>
                            <div class="post-info">
                                <p id="like-count" class="likes">${posts[postEl].likes} Likes</p>
                                <p class="post-caption">
                                    <span id="user-name" class="username">${posts[postEl].username}</span>
                                    <span id="caption" class="caption">${posts[postEl].comment}</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    `
    }
    main.innerHTML = renderPost
}

renderPost()

// like logic
const imgPost = document.getElementById("post-img")
const likesCount = document.getElementById("like-count")
const liked = document.getElementById("icons-heart")
let isLiked = false

imgPost.addEventListener("dblclick", function () {
    if (!isLiked) {
        liked.src = "images/heart.png"
        isLiked = true
        posts[0].likes += 1
        likesCount.innerHTML = `${posts[0]["likes"]} likes`
    } else {
        liked.src = "images/icon-heart.png"
        isLiked = false
        posts[0].likes -= 1
        likesCount.innerHTML = `${posts[0]["likes"]} likes`
    }
})

liked.addEventListener("click", function () {
    if (!isLiked) {
        liked.src = "images/heart.png"
        isLiked = true
        posts[0].likes += 1
        likesCount.innerHTML = `${posts[0]["likes"]} likes`
    } else {
        liked.src = "images/icon-heart.png"
        isLiked = false
        posts[0].likes -= 1
        likesCount.innerHTML = `${posts[0]["likes"]} likes`
    }

})




