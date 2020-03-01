import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            headerTitle: this.props.title, 
            listOpen: false,
            selectedKey: this.props.selectedKey,
            
        }
        this.close = this.close.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }
    handleClickOutside(){
        this.setState({
          listOpen: false
        })
    }
    componentDidUpdate(){
        const { listOpen } = this.state
        setTimeout(() => {
          if(listOpen){
            window.addEventListener('click', this.close)
          }
          else{
            window.removeEventListener('click', this.close)
          }
        }, 0)
    }
    componentWillUnmount(){
        window.removeEventListener('click', this.close)
    }
    
    close(timeOut){
        this.setState({
          listOpen: false
        })
    }

    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }
    selectItem(title,key){
        this.setState({
          headerTitle: title,
          listOpen: false
        });//, this.props.resetThenSet(key, stateKey))
        this.props.onChanged(key,this.props.id);
      }
    render(){
        const{list} = this.props
        const{listOpen, headerTitle} = this.state;
        
        return (
            <div className="dd-wrapper" id={this.state.id}>
                <input className="blue-outline" onClick={() => this.toggleList()} value={this.state.selectedKey? list.find(x=> x.key ==this.state.selectedKey).label : headerTitle} />
                <div class="Error" > {this.props.error}</div>
                {listOpen && <ul className="suggestion">
                    {list.map((item) => (
                    <li className={item.key ==this.state.selectedKey? "selected list-item" : "list-item"} onClick={() => this.selectItem(item.label,item.key)} key={item.key} > {item.label}</li>
                    ))}
                 </ul>}
            </div>
        );
    };
}
  export default Dropdown;