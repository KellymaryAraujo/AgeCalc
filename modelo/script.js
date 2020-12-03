function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fano = document.getElementById("ano")
    var fres = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("sex")
        var idade = anoAtual - Number(fano.value)
        var genero = " "
        var img = document.createElement("img")
        img.setAttribute("id", "foto") 
        // = <img id="foto">
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 3) {
                img.setAttribute("src", "hbe.png")
            } else if (idade < 12) {
                img.setAttribute("src", "hc.png")
            } else if ( idade < 18) {
                img.setAttribute("src", "had.png")
            } else if ( idade < 40) {
                img.setAttribute("src", "hja.png")
            } else if ( idade < 65) {
                img.setAttribute("src", "ha.png")
            } else {    
                img.setAttribute("src", "hid.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade <3) {
                img.setAttribute("src", "mbe.png")
            } else if (idade < 12) {
                img.setAttribute("src", "mc.png")
            } else if (idade < 18) {
                img.setAttribute("src", "mad.png")
            } else if (idade < 40) {
                img.setAttribute("src", "mja.png")
            } else if (idade < 65) {
                img.setAttribute("src", "ma.png")
            } else {    
                img.setAttribute("src", "mid.png")
            }
        }
        
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    
}
