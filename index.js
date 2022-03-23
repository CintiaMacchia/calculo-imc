function calculoImc() {
    let pesoA = document.getElementById('peso');
    let alturaB = document.getElementById('altura');
    // let resultadoImc = document.getElementById('resultado');
    let pesoN = Number(pesoA);
    let alturaN = Number(alturaB);
    let resImc = (pesoN / alturaN);
    window.alert(resImc)
}