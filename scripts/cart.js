function order() { //store order to localstorage
    itemId = document.forms["placeOrder"]["itemId"].value;
    price = document.forms["placeOrder"]["price"].value;
    num = document.forms["placeOrder"]["quantity"].value;

    jsonData = JSON.parse(localStorage.getItem('data'));
    console.log(itemId, price, num)

    if (!jsonData) {

        //if no itemId in localstorage, then create one
        jsonData = [];
        jsonData.push({
            itemId: itemId,
            price: Number(price),
            count: Number(num)
        });
    } else {
        num = jsonData.length;
        //alert(num)
        if (num == 0) {
            jsonData.push({
                itemId: itemId,
                price: Number(price),
                count: Number(num)
            });
        } else {

            for (i = 0; i < num; i++) {
                if (jsonData[i]["itemId"] == itemId) { //if has productId, then count +1


                    (jsonData[i]['count']) += 1;
                } else {

                    jsonData.push({
                        itemId: itemId,
                        price: Number(price),
                        count: Number(num)
                    });
                }
            }
        }
    }

    localStorage.setItem('data', JSON.stringify(jsonData));

    window.location.replace("Shopping_Cart.html");
}
// }

function showCart() { //show current storage info
    jsonData = JSON.parse(localStorage.getItem('data'));
    for (key in jsonData) {
        subTotal = jsonData[key].price * jsonData[key].count;
        itemId = jsonData[key].itemId;

        $('<div class="info warp"><ul><li class="info_1"><input type="checkbox" /></li><li class="info_2"><img src="images/img' + jsonData[key].itemId + '.jpg"></li><li class="info_3">Grape</li><li id="' + itemId + 'price">' + jsonData[key].price + ' &nbsp</li><li class="info_6"><button onclick="numDecrease(' + jsonData[key].itemId + ');">-</button><input type="text" name="" id="' + jsonData[key].itemId + 'count" value="' + jsonData[key].count + '"/><button class="bot" onclick="numIncrease(' + jsonData[key].itemId + ');">+</button></li><li class="info_7" id="' + itemId + 'subtotal">' + subTotal + '</li><span>&nbsp;</span<li><button class="del" onclick="javascript:delItem(' + jsonData[key].itemId + ');">Delete</button></li></ul></div>').insertAfter($('#itemList'));
        console.log(jsonData[key].itemId);
        console.log(jsonData[key].price);
        console.log(jsonData[key].count);

    }
}

function numIncrease(itemId) {
    price = document.getElementById(itemId + 'price').innerText;
    count = document.getElementById(itemId + 'count').value
    document.getElementById(itemId + 'count').value = newCount = Number(count) + 1;
    document.getElementById(itemId + 'subtotal').innerHTML = newCount * price; //subtotal of an item




}

function numDecrease(itemId) {
    currentCount = Number(document.getElementById(itemId + 'count').value);
    if (currentCount != 0) {
        document.getElementById(itemId + 'count').value = currentCount - 1;
        count = document.getElementById(itemId + 'count').value;
        price = document.getElementById(itemId + 'price').innerText;
        document.getElementById(itemId + 'subtotal').innerHTML = count * price;
    } else {
        //the count is now 0
    }

}

function delItem(itemId) {
    jsonData = JSON.parse(localStorage.getItem('data'));
    // localStorage.removeItem('itemId': )
    for (i = 0; i < jsonData.length; i++)
        if (jsonData[i].itemId == itemId) jsonData.splice(i, 1);
    localStorage["data"] = JSON.stringify(jsonData);
    // alert('删掉了')
    location.reload();

}




function setCookie(count) {
    document.cookie = count + "=" + count + ";"; //goodsid=count

}

function getCookie(cname) {
    count = document.cookie('count');
    console.log(count)
}



function checkall(form) {


    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].name.indexOf("musicid") != -1)
            form.elements[i].checked = true;
    }
}