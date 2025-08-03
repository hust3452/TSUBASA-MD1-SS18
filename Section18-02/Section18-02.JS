// bai tap 1

let product = [
    {id:1, name:'Milk', count:100},
    {id:2, name:'Orange', count:100},
    {id:3, name:'Butter', count:100},
];

// them san pham moi
let newid = product[product.length-1].id+1;
let newname = prompt('nhap vao ten san pham moi');
let newcount = +prompt('nhap vao gia tri count moi');

let new_product={
    id:newid,
    name:newname,
    count:newcount,
}
product.push(new_product);

// xoa doi tuong co id la 2
let option = +prompt('nhap vao 1 so bat ki tu 1-5');

let deleteIndex;
if(option == 2){
for(let i=0;i<product.length;i++){
    if(product[i].id == 2){
        deleteIndex=i;
        break;
    }else{deleteIndex=-1;}
}
console.log(deleteIndex);
product.splice(deleteIndex,1);
}
console.log(product);

if(option == 3) {
    for(let i=0; i<product.length;i++){
        if(product[i].name === "Butter"){
            console.log(product[i]);
            break;
        }else{"khong co tu khoa ma ban nhap vao";}
    }
}


