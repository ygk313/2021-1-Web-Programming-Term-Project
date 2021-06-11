var total = 0;
var op = 18;

function check(box){
    var cur = box.checked;

    if (cur == true){
        box.nextSibling.style="text-decoration:line-through";
        total += Number(box.value);
    }
    else if (cur == false){
        box.nextSibling.style="";
        total -= Number(box.value);
    }

    document.getElementById("cur_num").innerHTML = total;
}

function grad_check(box){
    var cur = box.checked;

    if (cur == true){
        box.nextSibling.style="text-decoration:line-through";
    }
    else if (cur == false){
        box.nextSibling.style="";
    }
}


function check_op(box){
    if (op>0){
        var cur = box.checked;

        if (cur == true){
            box.nextSibling.style="text-decoration:line-through";
            op-= Number(box.value);
        }
        else if (cur == false){
            box.nextSibling.style="";
            op+=Number(box.value);
        }

        
        document.getElementById("cur_op").innerHTML = op;

    }
    else{
        alert("전공 선택 학점을 모두 채우신 것 같습니다!");
    }
}