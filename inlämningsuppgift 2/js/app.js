function shiftLeft() {
    const boxes = document.querySelectorAll(".box-carousel");
    const tmpNode = boxes[0];
    boxes[0].className = "box-carousel move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 5) {
            tmpNode.classList.add("box-carousel--hide");
            boxes[5].className = "box-carousel move-to-position5-from-left";
        }
        boxes[1].className = "box-carousel move-to-position1-from-left";
        boxes[2].className = "box-carousel move-to-position2-from-left";
        boxes[3].className = "box-carousel move-to-position3-from-left";
        boxes[4].className = "box-carousel move-to-position4-from-left";
        boxes[0].remove();

        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 100);

}

function shiftRight() {
    const boxes = document.querySelectorAll(".box-carousel");
    boxes[4].className = "box-carousel move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 4) {
            boxes[4].className = "box-carousel box-carousel--hide";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box-carousel move-to-position1-from-right";
        boxes[0].className = "box-carousel move-to-position2-from-right";
        boxes[1].className = "box-carousel move-to-position3-from-right";
        boxes[2].className = "box-carousel move-to-position4-from-right";
        boxes[3].className = "box-carousel move-to-position5-from-right";
    }, 500);

 

}