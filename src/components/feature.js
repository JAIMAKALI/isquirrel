import React,{Component} from "react";



class Feature extends React.Component{
    constructor(props){
        super(props);

        this.handleRoutesChange = this.handleRoutesChange.bind(this);

    }

    handleRoutesChange(e){
        console.log(e)

        this.props.history.push(e)
        console.log("routes change hua");
    }
    render(){
        console.log(this.props)
        return(
            <div className="row mt-5 features">
                {
                    this.props.value.map((data)=>{
                        return(
                        <div className="col-md-3" key={data.slug}>
                            <div className="card card-custom" onClick={()=>this.handleRoutesChange(data.slug)}>
                                <div className="card-body" >
                                    <div className="img-center">
                                      <img src={data.img_url} className="card-image" />
                                      <p className="card-content">
                                           {data.key}
                                      </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                
                }
            </div>
        )
    }
}

export default Feature;