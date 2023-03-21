// Bai tap chen Form:
// const a = document.querySelector("#content > h2");

// function renderForm() {
//     return `<h1>Form Đăng Nhập</h1><br>
//     <label for="a">Tên đăng nhập</label>
//     <input type="text"></html>
//     <br><br>
//     <label for="b">Password</label>
//     <input type="password"></input>
//     `
// };

// a.innerHTMl = renderForm();

// Bai tap : Dao  nguoc

// const a = '1234567'.split('')
// const save = []
// a.forEach((v, i, a) => {
//     console.log('i',i);
//     console.log('a',a);
//     save.unshift(v)
// },[])
// console.log('save',save);
// const kq = save.join('')

function Daoso(a) {
    const aArg = a.split('')
    const save = []
    aArg.forEach((v, i, a) => {
        save.unshift(v)
    },[])
    const kq = save.join('')
    console.log('a')
}
    let aArray = a.split('')
    Daoso ('123')