import $ from "jquery"

(function(){

    let colapso = false

    const inicializarDesplegable = () => {
        $(".nav-sidebar-desplegable .titulo").append("<span class='f-derecha'></span>")
        $(".nav-sidebar-desplegable ul").hide()
        $(".nav-sidebar-desplegable .titulo").click( (e) => {
            let idLista = $(e.target).data("target")
            
            if($(idLista).hasClass("ab")) {
                $(idLista).slideUp(200)
                $(e.target).children(".f-abajo").remove()
                $(e.target).append("<span class='f-derecha'></span>")
                $(idLista).removeClass("ab") 
            }else {
                $(idLista).slideDown(200)
                $(e.target).children(".f-derecha").remove()
                $(e.target).append("<span class='f-abajo'></span>")
                $(idLista).addClass("ab") 
            }
        })

        $(".boton-desplegable").click( function (e) {
            let idColapso = $(e.target).data("trigger")
            if(idColapso === undefined) 
                idColapso = $(e.target).parent().data("trigger")
            if(colapso === false || colapso === undefined) {
                $(idColapso).css("left", 0)
                colapso = true
                if($(window).width() > 1024) {
                    $(".nav-contenido").css("width", "calc(100% - 240px)")
                    $(".nav-contenido").css("margin-left", "240px")
                }

            }else {
                $(idColapso).css("left", -240)
                colapso = false
                if($(window).width() > 1024) {
                    $(".nav-contenido").css("width", "100%")
                    $(".nav-contenido").css("margin-left", 0)
                }
            }
        })
    }


    const desplegar = (e) => {
        let idColapso = $(e.target).data("trigger")
        if(idColapso === undefined) 
            idColapso = $(e.target).parent().data("trigger")

        if($(idColapso).hasClass("nav-sidebar")) {
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
        $(".nav-sidebar").css("top", $(".nav-body").height())
        inicializarDesplegable()
        if($(".nav-body").hasClass("nav-fixed")) {
            $(".nav-sidebar").css("top", $(".nav-body").height()) 
            $(".nav-sidebar-desplegable").css("top",$(".nav-body").height() )
        }else {
            $(".nav-sidebar").css("top", 0) 
            $(".nav-sidebar-desplegable").css("top",0 )
        }

        $(".nav-colapso").hide()
        $(".boton-nav").append("<span></span><span></span><span></span>")
        $(".boton-desplegable").append("<span></span><span></span><span></span>")

        $("body").append("<div class='nav-complemento'></div>")
        $(".nav-complemento").hide()
        $(".boton-nav").click((e) => desplegar(e))
        $(window).scroll( () => {
            $(".nav-colapso").css("top", $(".nav-body").height())
        })

        $(window).resize(() => {
            if($(window).width() > 1030) {
                $(".nav-colapso").hide()
                $(".nav-sidebar").css("left", -240)
                $(".nav-complemento").hide()
                colapso = false
            }
        })

        $(".nav-complemento").click( () => {
            $(".nav-sidebar").css("left", -240)
            $(".nav-sidebar-desplegable").css("left", -240)
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