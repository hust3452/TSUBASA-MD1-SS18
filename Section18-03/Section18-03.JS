 let myNodelist = document.getElementsByTagName('LI');
        for ( let i=0;i< myNodelist.length;i++){
            let span = document.createElement('SPAN');
            let txt = document.createTextNode('\u00D7');
            span.className="delete";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }

        const check = document.getElementsByTagName('li');
        for(let i=0;i<check.length;i++){
            check[i].onclick = function(){
            check[i].classList.toggle('checked');
            }
        }
        const deLete = document.querySelectorAll('.delete');
            for(let i=0;i<check.length;i++){
            deLete[i].onclick = function(){
            check[i].style.display="none";
            }
        }
      function add() {
        // tạo node li
        var li = document.createElement("li");
        // lấy giá trị người dùng nhập
        var inputValue = document.getElementById("input").value;
        // tạo đối tượng text node
        var t = document.createTextNode(inputValue);
        // gán text node cho thẻ li vừa tạo
        li.appendChild(t);
        // kiểm tra nếu text node rỗng thì cảnh báo, nếu không thì thêm vào trong thẻ ul
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("list").appendChild(li);
        }

        document.getElementById("input").value = " ";

        let myNodelist = document.getElementsByTagName('LI');
            let span = document.createElement('SPAN');
            let txt = document.createTextNode('\u00D7');
            span.className="delete";
            span.appendChild(txt);
            myNodelist[myNodelist.length-1].appendChild(span);

            const deLete = document.querySelectorAll('.delete');
            for(let i=0;i<check.length;i++){
            deLete[i].onclick = function(){
            check[i].style.display="none";
            }
        }
    
    }
