import $ from "jquery"

(function(){

    let colapso = false

    const desplegar = (e) => {
        let idColapso = $(e.target).data("trigger")
        if(idColapso === undefined) 
            idColapso = $(e.target).parent().data("trigger")

        if($(idColapso).hasClass("nav-lista")) {
            if(colapso === false || colapso === undefined) {
                $(idColapso).css("left", 0)
                $(".nav-complemento").show()
                colapso = true
            }else {
                $(idColapso).css("left", -240)
                $(".nav-complemento").hide()
                colapso = false
            } 
        }else {
            if(colapso === false || colapso === undefined) {
                $(idColapso).slideDown(200)
                colapso = true
            }else {
                $(idColapso).slideUp(200)
                colapso = false
            }
        }
    }
    const inicializar = () => {
        $(".nav-colapso").css("top", $(".nav-body").height())
        $(".nav-lista").css("top", $(".nav-body").height())
        $(".nav-colapso").hide()
        $(".boton-nav").append("<span></span><span></span><span></span>")
        $("body").append("<div class='nav-complemento'></div>")
        $(".nav-complemento").hide()
        $(".boton-nav").click((e) => desplegar(e))
        $(window).scroll( () => {
            $(".nav-colapso").css("top", $(".nav-body").height())
        })

        $(window).resize(() => {
            if($(window).width() > 1030) {
                $(".nav-colapso").hide()
                $(".nav-lista").css("left", -240)
                $(".nav-complemento").hide()
                colapso = false
            }
        })

        $(".nav-complemento").click( () => {
            $(".nav-lista").css("left", -240)
            $(".nav-complemento").hide()
            colapso = false
        })
    }


    const Nav = {
        iniciar: () => inicializar()
    }
    window.Nav = Nav
})()

export default Nav