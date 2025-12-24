import { posts } from '/data.js'


//variables
const main = document.getElementById("posts-el")




//post

function renderPost() {
    let renderPost = ''
    for (let postEl of posts) {
        renderPost += `
        <section class="post">
            <div class="post-header">
                <div>
                    <img class="post-user-img" src="${postEl.avatar}" alt="avatar-courbet">
                </div>
                <div class="post-header-typography">
                    <p class="name">${postEl.name}</p>
                    <p class="location">${postEl.location}</p>
                </div>
            </div>
            <div class="post-container-img">
                <img class="post-img" src="${postEl.post}" alt="post - courbet">
            </div>
            <div class="post-footer">
                <div class="icons">
                    <img class="liked" src="images/icon-heart.png" alt="icon-heart" data-like="${postEl.uuid}">
                        <img class="comment" src="images/icon-comment.png" alt="icon-comment">
                            <img class="dm" src="images/icon-dm.png" alt="icon-dm">
                            </div>
                            <div class="post-info">
                                <p class="likes">${postEl.likes} Likes</p>
                                <p class="post-caption">
                                    <span class="username">${postEl.username}</span>
                                    <span class="caption">${postEl.comment}</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    `
    }
    main.innerHTML = renderPost
}



// like logic



document.addEventListener('click', function (e) {
    if (e.target.dataset.like) {
        targetPostlike(e.target.dataset.like)
    }
})

function targetPostlike(likeUuid) {
    const targetObj = posts.filter(function (post) {
        return post.uuid === likeUuid
    })[0]

    if (!targetObj.isLiked) {
        targetObj.likes++
        targetObj.isLiked = true

    } else {
        targetObj.likes--
        targetObj.isLiked = false

    }
    renderPost()
}
renderPost()

