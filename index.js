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

const name = document.getElementById("name")
const userName = document.getElementById("user-name")
const loCation = document.getElementById("location")
const avatar = document.getElementById("post-user-img")
const post = document.getElementById("post-img")
const comment = document.getElementById("caption")
const likesCount = document.getElementById("like-count")


const name1 = document.getElementById("name1")
const userName1 = document.getElementById("user-name1")
const loCation1 = document.getElementById("location1")
const avatar1 = document.getElementById("post-user-img1")
const post1 = document.getElementById("post-img1")
const comment1 = document.getElementById("caption1")
const likesCount1 = document.getElementById("like-count1")

const name2 = document.getElementById("name2")
const userName2 = document.getElementById("user-name2")
const loCation2 = document.getElementById("location2")
const avatar2 = document.getElementById("post-user-img2")
const post2 = document.getElementById("post-img2")
const comment2 = document.getElementById("caption2")
const likesCount2 = document.getElementById("like-count2")


name.innerHTML = posts[0]["name"]
userName.innerHTML = posts[0]["username"]
loCation.innerHTML = posts[0]["location"]
avatar.src = posts[0]["avatar"]
post.src = posts[0]["post"]
comment.innerHTML = posts[0]["comment"]
likesCount.innerHTML = `${posts[0]["likes"]} likes`

name1.innerHTML = posts[1]["name"]
userName1.innerHTML = posts[1]["username"]
loCation1.innerHTML = posts[1]["location"]
avatar1.src = posts[1]["avatar"]
post1.src = posts[1]["post"]
comment1.innerHTML = posts[1]["comment"]
likesCount1.innerHTML = `${posts[1]["likes"]} likes`

name2.innerHTML = posts[2]["name"]
userName2.innerHTML = posts[2]["username"]
loCation2.innerHTML = posts[2]["location"]
avatar2.src = posts[2]["avatar"]
post2.src = posts[2]["post"]
comment2.innerHTML = posts[2]["comment"]
likesCount2.innerHTML = `${posts[2]["likes"]} likes`










// icons logic

const liked = document.getElementById("icons-heart")
let isLiked = false

post.addEventListener("dblclick", function () {
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

const liked1 = document.getElementById("icons-heart1")
let isLiked1 = false

post1.addEventListener("dblclick", function () {
    if (!isLiked1) {
        liked1.src = "images/heart.png"
        isLiked1 = true
        posts[1].likes += 1
        likesCount1.innerHTML = `${posts[1]["likes"]} likes`
    } else {
        liked1.src = "images/icon-heart.png"
        isLiked1 = false
        posts[1].likes -= 1
        likesCount1.innerHTML = `${posts[1]["likes"]} likes`
    }
})

liked1.addEventListener("click", function () {
    if (!isLiked1) {
        liked1.src = "images/heart.png"
        isLiked1 = true
        posts[1].likes += 1
        likesCount1.innerHTML = `${posts[1]["likes"]} likes`
    } else {
        liked1.src = "images/icon-heart.png"
        isLiked1 = false
        posts[1].likes -= 1
        likesCount1.innerHTML = `${posts[1]["likes"]} likes`
    }

})


const liked2 = document.getElementById("icons-heart2")
let isLiked2 = false

post2.addEventListener("dblclick", function () {
    if (!isLiked2) {
        liked2.src = "images/heart.png"
        isLiked2 = true
        posts[2].likes += 1
        likesCount2.innerHTML = `${posts[2]["likes"]} likes`
    } else {
        liked2.src = "images/icon-heart.png"
        isLiked2 = false
        posts[2].likes -= 1
        likesCount2.innerHTML = `${posts[2]["likes"]} likes`
    }
})

liked2.addEventListener("click", function () {
    if (!isLiked2) {
        liked2.src = "images/heart.png"
        isLiked2 = true
        posts[2].likes += 1
        likesCount2.innerHTML = `${posts[2]["likes"]} likes`
    } else {
        liked2.src = "images/icon-heart.png"
        isLiked2 = false
        posts[2].likes -= 1
        likesCount2.innerHTML = `${posts[2]["likes"]} likes`
    }

})


