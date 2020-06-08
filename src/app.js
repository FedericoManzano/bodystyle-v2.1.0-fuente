

/*!
 * BodyStyle v2.1.0
 * Copyright Federico Manzano
 * Licencia MIT
 * Repositorio (https://github.com/FedericoManzano/bodystyle-v2.1.0-fuente)
 */
import "jquery"
import Modal from "./modulos/Modal"
import Waves from  "./modulos/Waves"
import DropDown from "./modulos/Dropdown"
import BotonFlotante from "./modulos/BotonFlotante"
import Toast from "./modulos/Toast"
import ScrollSpy from "./modulos/ScrollSpy"
import ToolTips from "./modulos/ToolTips"
import Imagenes from "./modulos/Imagenes"
import Range from "./modulos/Range"
import Slider from "./modulos/Slider"
import Paralax from "./modulos/Paralax"
import BotonInicio from "./modulos/BotonInicio"
import Alerta from "./modulos/Alerta"
import Template from "./modulos/Template"
import Tab from "./modulos/Tabs"
import GruposInput from "./modulos/GruposInput"
import Desactivado from "./modulos/Desactivado"
import Coleccion from "./modulos/Colecciones"
import ColeccionFlotante from "./modulos/ColeccionFlotante"
import EfectoHoverBorde from "./modulos/EfectoHoverBorde"
import InputHandler from "./modulos/InputHandler"
import Select from "./modulos/Select"
import Contenedores from "./modulos/Contenedores"
import Nav from "./modulos/Nav"



(function(window){
    Waves.iniciar()
    Range.iniciar()
    Alerta.iniciar()
    Template.iniciar()
    GruposInput.iniciar()
    Desactivado.iniciar();
    InputHandler.iniciar()
    

    const NavInit = () => {
        Nav.iniciar()
    }


    var ContenedoresInit = () => Contenedores.iniciar()

    var ColeccionInit = () => {
        return new Coleccion
    } 

    var ParalaxInit = () => Paralax.iniciar()


    var BotonFlotanteInit = (config) => {
        BotonFlotante.iniciar(config)
    }

    var ScrollSpyInit = (config) => ScrollSpy.iniciar(config)



    var ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    var ImagenesInit = ()=> {
        Imagenes.iniciar()
    }


    var BotonInicioInit = () => {
        BotonInicio.iniciar()
    }

    var TabInit = () => {
        return new Tab
    }

    var ColeccionFlotanteInit = () => {
        return new ColeccionFlotante
    }

    var EfectoHoverBordeInit = () => {
        return new EfectoHoverBorde
    }

    var AutoInit = ()=> {
        ModalInit()
        DropDownInit({})
        ScrollSpyInit({})
        BotonFlotanteInit({})
        ImagenesInit()
        SliderInit({})
        ParalaxInit()
        ToolTipsInit()
        NavInit()
    }


    var SliderInit = (config) => {
        Slider.iniciar(config)
    }

    var Deshabilitar = () => {
        desactivar(".deshabilitado")
        desactivar(".input-cargando")
        desactivar(".input-cargando input")
        desactivar(".b-rojo-cargando")
        desactivar(".b-verde-cargando")
        desactivar(".b-azul-cargando")
        desactivar(".b-gris-cargando")
        desactivar(".b-negro-cargando")
        desactivar(".b-blanco-cargando")
    }
    
    var DropDownInit = (config) => {
        DropDown.iniciar(config)
    }

    var ToolTipsInit = () => {
        ToolTips.iniciar()
    }

    var SelectInit = () => {
        return new Select
    }


   var BS = {
        ModalInit: (config) => ModalInit(config),
        DropDownInit: (config) => DropDownInit(config),
        AutoInit: () => AutoInit(),
        Toast: (html, clases, tiempo) => Toast.ejecutar(html, clases, tiempo),
        ScrollSpyInit: (config) => ScrollSpyInit(config),
        BotonFlotanteInit: (config)=> BotonFlotanteInit(config),
        ImagenesInit: () => ImagenesInit(),
        Deshabilitar: () => Deshabilitar(),
        SliderInit: (config = {}) => SliderInit(config),
        ParalaxInit: () => ParalaxInit(),
        BotonInicioInit: () => BotonInicioInit(),
        TabInit: () => TabInit(),
        ToolTipsInit: () =>  ToolTipsInit(),
        DesplegarSidebarFija: () => DesplegarSidebarFija(),
        ColeccionInit: () => ColeccionInit(),
        ColeccionFlotanteInit: () => ColeccionFlotanteInit(),
        EfectoHoverBordeInit: () => EfectoHoverBordeInit(),
        SelectInit: () => SelectInit(),
        ContenedoresInit: () => ContenedoresInit(),
        NavInit: () => NavInit()
    }
    
    window.BS = BS
    return BS
})(window)

export default BS




