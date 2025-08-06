let click_button = document.getElementById('add_button');
        click_button.onclick = function () {
            let add_name = document.getElementById('add_name').value;
            let add_age = document.getElementById('add_age').value;
            let add_class = document.getElementById('add_class').value;

            let student_list = localStorage.getItem('student_list') ? JSON.parse(localStorage.getItem('student_list')) : [];
            
            student_list.push({
                name: add_name,
                age: add_age,
                class: add_class
            }
            );

            localStorage.setItem('student_list', JSON.stringify(student_list));
        }

        function renderListStudent() {
            let student_list = localStorage.getItem('student_list') ? JSON.parse(localStorage.getItem('student_list')) : [];
            
            if (student_list.length===0) return false;
            
            let tableContent = `<tr>
                <td>Tên</td>
                <td>Tuổi</td>
                <td>Lớp</td>
                <td>Hành động

                </td>
            </tr>`;

            student_list.forEach((student) => {
                tableContent += `<tr>
                <td> ${student.name}</td>
                <td> ${student.age}</td>
                <td> ${student.class}</td>
                <td>
                <span><button class="fix">Sửa</button></span> <span><button class="delete">Xóa</button></span>
                </td>
            </tr>`;
            })

            document.getElementById('table').innerHTML = tableContent;
        }
