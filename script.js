function print_contact() {
    const skype = "helper";
    const telegram = "@helper";
    const tel = "89855344387";
    alert(`Обратитесь по одному из контактов:\nskype: ${skype} \ntelegram: ${telegram}\n tel: ${tel}`)
}
const openBtn = document.getElementById("gift-1")
const modal = document.getElementById("myModal")
const closeBtn = document.getElementById("close")

openBtn.onclick = function () {
    modal.style.display = "block";
}
closeBtn.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === modal) {
       modal.style.display = "none";
   }
}
const openBtnTp = document.getElementById("helper")
const modalTp = document.getElementById("myModal-tp")
const closeBtnTp = document.getElementById("close-tp")

openBtnTp.onclick = function () {
    modalTp.style.display = "block";
}
closeBtnTp.onclick = function () {
    modalTp.style.display = "none";
}
modalTp.onclick = function (event) {
    if (event.target === modalTp) {
       modalTp.style.display = "none";
   }
}