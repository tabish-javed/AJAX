const loadCommentsBtnElement = document.getElementById("load-comments")

async function fetchCommentsForPost() {
    const postID = loadCommentsBtnElement.dataset.postid
    const response = await fetch(`/posts/${postID}/comments`)
    const responseData = await response.json()

}

loadCommentsBtnElement.addEventListener("click", fetchCommentsForPost)
