import React, {Component} from 'react'

class ItemBuahContext extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <td>{this.props.item.nama}</td>
            <td>{this.props.item.harga}</td>
            <td>{this.props.item.berat/1000} kg </td>
            </>
            
        )
    }
}

export default ItemBuahContext