'use strict';

const toggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown-lists");
const lists = document.querySelectorAll("li")
const options = document.querySelectorAll("dropdown-option");

// 토글 버튼이 클릭되면 lists 를 보여준다
// lists 의 max-height:0  >> lists에 class를 .show를 해준다
// lists의 show를 해지한다(클릭되면 lists가 안보이도록)

toggle.addEventListener('click', e => {
    console.log(e)
    dropdown.classList.toggle('show')
})

options.forEach(function (item) {
    item.addEventListener('click', function (e) {
        console.log(e.currentTarget)
    })
})