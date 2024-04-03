setInterval(() => {
    document.querySelectorAll("[title='Advertisement']").forEach(video => {
        if (video) {
            video.playbackRate = 15.0
        }
    })
}, 1000)