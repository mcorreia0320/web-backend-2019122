function started() {
    console.log('Download Started...')
};
function update(progress) {
    console.log(progress + "% of Download")
};
function completed() {
    console.log('Download Completed!')
};

function performDownload(started, update, completed) {
    started();
    
    for (let i = 0; i <= 100; i++) {
        update(i);
    }
    
    completed();
};

performDownload(started, update, completed);