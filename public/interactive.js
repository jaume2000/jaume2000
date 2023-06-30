function break_barrier() {

    let barrier = document.getElementById("barrier")
    let msg1 = document.getElementById("msg1")
    let msg2 = document.getElementById("msg2")
    let msg3 = document.getElementById("msg3")
    let cv_button = document.getElementById("download_cv")


    barrier.classList.remove("enabled")
    barrier.classList.add("disabled")
    msg1.classList.add("disabled")
    msg2.classList.add("disabled")
    msg3.classList.add("disabled")
    cv_button.classList.add("disabled")
    
}