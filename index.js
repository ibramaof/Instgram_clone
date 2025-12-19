const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let name = document.getElementById("name")
let userName = document.getElementById("user-name")
let loCation = document.getElementById("location")
let avatar = document.getElementById("post-user-img")
let post = document.getElementById("post-img")
let comment = document.getElementById("caption")
let likesCount = document.getElementById("like-count")



name.innerHTML = posts[1]["name"]
userName.innerHTML = posts[1]["username"]
loCation.innerHTML = posts[1]["location"]
avatar.src = posts[1]["avatar"]
post.src = posts[1]["post"]
comment.innerHTML = posts[1]["comment"]
likesCount.innerHTML = `${posts[1]["likes"]} likes`

let liked = document.getElementById("icons-heart")
let isLiked = false

post.addEventListener("dblclick", function () {
    if (!isLiked) {
        liked.src = "images/heart.png"
        isLiked = true
    } else {
        liked.src = "images/icon-heart.png"
        isLiked = false
    }
})

liked.addEventListener("click", function () {
    if (!isLiked) {
        liked.src = "images/heart.png"
        isLiked = true
    } else {
        liked.src = "images/icon-heart.png"
        isLiked = false
    }

})


