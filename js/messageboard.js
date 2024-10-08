$(document).ready(function () {
    /*上捲*/
    $('.fa-solid').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});
/*留言板*/
// 放在document.ready外部，確保全局可訪問
var nameElement = document.getElementById("username");
var feedbackElement = document.getElementById("feedback");
function processFormData() {
    const name = nameElement.value;
    console.log("processFormData被呼叫了");
    alert("謝謝" + name + "獻出的心臟");
}
function addMsg() {
    // 獲取 table 元素
    let table = document.getElementById("Feedback_table");
    // 建立新行
    let newRow = table.insertRow();
    // 插入三個新單元格
    newRow.insertCell().innerHTML = new Date().toLocaleString();
    newRow.insertCell().innerHTML = nameElement.value;
    newRow.insertCell().innerHTML = feedbackElement.value;
    // 清空表單欄位
    nameElement.value = '';
    feedbackElement.value = '';
}


$(document).ready(function () {
    // 當頁面加載時，設置 n 秒延遲後播放動畫
    setTimeout(function () {
        $("#myElement1").fadeIn().addClass("animate__fadeInUp");
    }, 500);
});
$(document).ready(function () {
    // 當頁面加載時，設置 n 秒延遲後播放動畫
    setTimeout(function () {
        $("#myElement2").fadeIn().addClass("animate__fadeInUp");
    }, 1700);
});

// $(document).ready(function() {
//     $("h2").hover(
//         function() {
//             $(this).addClass("animate__animated animate__flipInX");
//         },
//         function() {
//             $(this).removeClass("animate__animated animate__flipInX");
//         }
//     );
// });
