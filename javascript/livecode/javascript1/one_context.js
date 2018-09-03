console.log('hallo world');

function a() {
    b();
}

function b() {
    d();
}

function c() {
    return;
}

function d() {
    c();
}

a();

