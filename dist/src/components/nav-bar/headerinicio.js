class headerinicio extends HTMLElement {
    static get observedAttributes(){
        return[]
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.render();
    }
    attributeChangeCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
}

    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="../../../../css/estilos.css">
        <header class="header" id="inicio">
        <img src="../img/menu-regular-24.png" alt="" class="ham">
        <nav class="menu-navegacion spread">
            <a href="#start">My Order</a>
            <a href="#service">My Direction</a>
            <a href="#folder">My Reference</a>
            <a href="#experts">Whislist</a>
            <a href="#contact">Track Order</a>
        </nav>
        <div class="contenedor head">
            <h1 class="titulo">SS 77</h1>
            <p class="copy">The Spring Summer</p>
        </div>
    </header>
    <script src="../js/menu.js"></script>
        `
    }
}
customElements.define("app-header", headerinicio);
export default headerinicio;