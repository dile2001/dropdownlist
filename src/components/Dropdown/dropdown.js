import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component{
    //header = "";

    constructor(props){
        super(props)
        this.state = {
            listOpen: false,
            
        }
        this.header= this.props.title;
        this.selected = this.props.selectedKey;

    }

    // static getDerivedStateFromProps(props, state) {
    //     // Any time the current user changes,
    //     // Reset any parts of state that are tied to that user.
    //     // In this simple example, that's just the email.
    //     if (props.title !== state.headerTitle) {
    //       return {
    //         headerTitle: props.title,
    //         //selectedKey: props.selectedKey
    //       };
    //     }
    //     return null;
    //   }
    handleClickOutside(){
        this.setState({
          listOpen: false
        })
    }
    componentDidMount(){
        this.setState({
            
            
            listOpen: false
            
            
        });
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
        window.removeEventListener('click', this.close);
         
    }
    
    close = () => {
        this.setState({
          listOpen: false
       
        })
    }

    toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
    }
    selectItem = (title,key) => {
        this.header = title;
        this.selected=key;
        this.setState({
          listOpen: false
        });//, this.props.resetThenSet(key, stateKey))
        
        this.props.onChanged(key,this.props.id);
      }
    render(){
        const {list} = this.props
        const {listOpen} = this.state;
        
        return (
            <div className="dd-wrapper" id={this.state.id} >
                <input className="blue-outline" onClick={() => this.toggleList()} 
                value={this.selected? list.find(x=> x.key ==this.selected).label : this.header} readOnly={true}/>
                <div className="Error" > {this.props.error}</div>
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