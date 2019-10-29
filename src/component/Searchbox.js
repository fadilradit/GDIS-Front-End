import React, {Component} from 'react'
import axios from 'axios'

class Searchbox extends Component{

    state = {
        news : [],
        filterNews: []
    }
    componentDidMount() {
        this.getNews()
    }

    // get news
    getNews = () => {
        axios.get('https://api.nytimes.com/svc/archive/v1/2019/9.json?api-key=pyau1mCKMFHOBuLLfnUaI2wrkAL3SLT2')
            .then(res => {
                this.setState({news: res.data.response.docs})
            })
            .catch(err => console.log(err))
    }

    // search
    onSearch = (e) => {
        e.preventDefault()
        const search = this.search.value
        const filter = this.state.news.filter((item) => {
            return item.snippet.toLowerCase().includes(search.toLowerCase())
        })
        this.setState({filterNews: filter})
        
    }

    renderList = () => {
        return this.state.filterNews.map(item => {

            return(
                <div className = "col-auto border border-dark m-5 bg-dark shadow-lg rounded">
                        <h2 className = "font-weight-bold text-white">{item.snippet}</h2>
                            <h5 className = "text-white">{item.abstract}</h5>
                            <h5 className = "text-white">{item.lead_paragraph}</h5>
                    </div>
            )
        })
    }

    render(){
        return(
            <div>
                <div className="container mt-5 p-0">
                    <div className='jumbotron bg-dark mb-0'>
               
                        <h4 className='text-white'>Home</h4>
               
                            <div className='row'>
                                <div className='col-12 justify-content-center d-flex text-white'>
                                    <h1 className=''>What <span className='font-weight-bold'>Are You</span> Looking For?</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <form className='form-group' className='col-12'>
                                    <div className='col-12 mt-4 text-center justify-content-center d-flex input-group'>
                                        <div class="input-group-prepend">
                                        <span class="input-group-text bg-dark text-white" >Search</span>
                                        </div>
                                        <input  placeholder='Input here' className='w-50' ref = {(input) => {this.search = input}} />
                                        <button className='btn btn-success' onClick = {this.onSearch} >Submit</button>
                                    </div>
                                </form>
                            </div>
                    </div>

                </div>

                <div className = "border border-dark m-5 p-0 bg-white rounded">
                    <div>
                        <h1 className = "row m-5">List:</h1>
                    </div>

                    {this.renderList()}

                </div>
            </div>
        )
    }
}

export default Searchbox;