function a() {  // (2) first try to find b in parent memory which does not exists
    c();
    function c() {  // (1) first try to find b in local memory which does not exists
        console.log('b:', b);
    }
}

var b = 10; // (3) b is found in global memory
a();

///////////Lexical environment (immediate parent)
// means local memory along with the lexical environment of its parent
// Lexical environment = Lexical environment(of parent) + local memory
///// in global level 
// Lexical environment = local memory + null(since there is no more parent)