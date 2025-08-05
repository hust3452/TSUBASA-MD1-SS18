        let input_moji = document.getElementById('input_text');
        let moji = document.querySelectorAll(".moji");
        let del = document.getElementById('delete');

        for (let i = 0; i < moji.length - 1; i++) {
            moji[i].onclick = function () {
                let input_value = moji[i].innerText;
                input_moji.value = input_moji.value + input_value;
            del.onclick = function () {
            input_moji.value = "";
        }                
            }
        }