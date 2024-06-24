import Rec from 'react'

class Navegation extends Rec.Component{

    render(){
        function go_to_home() {
            window.location="/"
        }
        let go_to_register = ()=>{
            window.location="/register"
        }
        return(
            <div className='block-navegation'>
                <li class='block-navegation-item'>
                    <button id='block-btn-nav' onClick={go_to_home}>Home</button>
                </li>
                <li class='block-navegation-item'>
                    <button id='block-btn-nav' onClick={go_to_register}>Registrar</button>
                </li>
                <li class='block-navegation-item'>
                    <button id='block-btn-nav'>Consult</button>
                </li>
                <li class='block-navegation-item'>
                    <button id='block-btn-nav'>Contact</button>
                </li>
            </div>
        )
    }

}

export default Navegation;