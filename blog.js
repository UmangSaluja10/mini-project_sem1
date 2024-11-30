function showMore(blogId) {
    const moreContent = document.getElementById(`more-${blogId}`);
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}
