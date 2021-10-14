
import react, {Component} from "react";
class Api extends Component {
    constructor(){
        super();
        this.state={
            items:[],
            isLoaded:true,
            error:null
        }
    }
    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/photos').then(res=>res.json())
        .then(result=>{
            this.setState({
                
                items:result,
                isLoaded:false
            })
        })
        

    }
    render(){
        const {items,isLoaded,error}=this.state
        if(isLoaded){
           return (
           <div>
            Loading Content Please Wait...
            </div>
            )
        }
        else
        {
            return <div className="data">
                      {
                          items.map(item => (
                            <div className="img">
                                <h3>{item.title}</h3>
                                <img src={item.url} style={styles.img}  alt=""/>
                            </div>
                          ))
                      }
                    </div>
        }
    }
}
const styles={
    img:{
        height:200,
        width:200
    }
}
export default Api;

 

