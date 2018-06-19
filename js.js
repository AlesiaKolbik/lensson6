"use strict";

let node = document.documentElement;

function printTree(node,level) {
    if(node === null) return;
    if(node.nodeType === 1) {
        console.log(level+node.nodeName);
    }
    level+=" ";
    for(let i = 0;i<node.childNodes.length;i++){
        printTree(node.childNodes[i],level);
    }
}

printTree(node,"");