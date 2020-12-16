import React from 'react'
import './SecaoCompartilhar.css'
import IconeFace from '../../img/facebook.png'
import IconeInsta from '../../img/instagram.png'
import IconeTwitter from '../../img/twitter.png'

export class SecaoCompartilhar extends React.Component {

    render() {
		return  <div className={'comment-container'}>
                    <div className="box-img-compartilhar">
                        <img className="img-compartilhar" src={IconeFace}/>
                        <img className="img-compartilhar" src={IconeInsta}/>
                        <img className="img-compartilhar" src={IconeTwitter}/>	
                    </div>
		        </div>
	}
}