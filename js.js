"use strict";

let node = document.documentElement;

function printTree(node) {
    if(node === null) return;
    console.log(node);
    for(let i = 0;i<node.childNodes.length;i++){
        console.log(node.childNodes[i]);
        printTree(node.childNodes[i]);
    }
}