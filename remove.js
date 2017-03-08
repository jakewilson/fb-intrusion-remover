(function removeIntrusion() {
    /**
        This is the very specific and well-named class name
        for the intrusive modal on every facebook page.
        There is only one element with this class name that
        I've ever encountered, but just to be safe, we'll
        loop through the array and remove every element with
        this class name.
    */
    let intrusions = document.getElementsByClassName('_5hn6');
    for (let i = 0; i < intrusions.length; i++) {
        intrusions.item(i).remove();
    }
})();
