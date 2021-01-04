import React from 'react'
import './SecaoCompartilhar.css'
import IconeFace from '../../img/facebook.png'
import IconeInsta from '../../img/instagram.png'
import IconeTwitter from '../../img/twitter.png'

export class SecaoCompartilhar extends React.Component {
   
    state = {
		comentarioCompartilhar: ''
	}

	onChangeComentarioCompartilhar = (event) => {
		console.log(event.target.value)
		this.setState({comentarioCompartilhar: event.target.value})
    }

    render() {
		return (
            <div className={'comment-container'}>
                <div className="box-img-compartilhar">
                    <img className="img-compartilhar" src={IconeFace} alt='botao compartilhar no facebook' value='facebook' onClick={this.props.onClickFace}/>
                    <img className="img-compartilhar" src={IconeInsta} alt='botao compartilhar no Instagram' value='instagram' onClick={this.props.onClickInsta}/>
                    <img className="img-compartilhar" src={IconeTwitter} alt='botao compartilhar no twitter' value='twitter' onClick={this.props.onClickTwitter}/>
                </div>
		    </div>

        )
        
	}
}