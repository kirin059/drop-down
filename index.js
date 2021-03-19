'use strict';

const toggle = document.querySelector(".dropdown-toggle");
const dropdown = document.querySelector(".dropdown-lists");
const options = document.querySelectorAll(".dropdown-option");
const nextBtn = document.querySelector(".next-btn")

// 토글 버튼이 클릭되면 lists 를 보여준다
// lists 의 max-height:0  >> lists에 class를 .show를 해준다
// lists의 show를 해지한다(클릭되면 lists가 안보이도록)

toggle.addEventListener('click', e => {
    //console.log(e)
    dropdown.classList.add('show')
})

// 클릭한 option이 toggle창 안에 값이 들어오도록

options.forEach(function (item) {
    item.addEventListener('click', e => {
        //console.log(e.currentTarget)

        const value = e.currentTarget.innerText;
        //console.log(value)
        toggle.innerHTML = value;
        toggle.classList.add('selected');
        // dropdown.classList.remove('show')
        // nextBtn.removeAttribute('disabled')
    })
});

toggle.addEventListener('blur', function () {
    //console.log(e)
    dropdown.classList.remove('show')
})
