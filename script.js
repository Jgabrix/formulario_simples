const usuario_nome = document.querySelector('.nome')
const usuario_sobrenome = document.querySelector('.sobrenome')
const usuario_email = document.querySelector('#email')
const usuario_senha = document.querySelector('#senha')
const usuario_telefone = document.querySelector('#telefone')

const usuario_cadastro = document.querySelector('#cadastro')

usuario_cadastro.addEventListener('click', () => {
    if(usuario_nome.value == '' || usuario_sobrenome.value == '' || usuario_email.value == '' || usuario_senha.value == '' || usuario_telefone.value == '') {
        alert('Preencha o(s) campo(s) corretamente!')
    }else {
        alert(`Conta ${usuario_email.value} cadastrada. Seja bem vindo ${usuario_nome.value + usuario_sobrenome.value}`)
    }
})