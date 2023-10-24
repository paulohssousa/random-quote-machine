import React, { useEffect, useState } from "react";
import './quoteBox.css'

export default function QuoteBox() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const url = 'https://api.api-ninjas.com/v1/quotes?category=death';
    const myInit = {
        method: "GET",
    headers: { 'X-Api-Key': `${process.env.REACT_APP_API_KEY}` }
    }

    const fetchData = async() => {
        try {
            fetch(url, myInit)
                .then(response => response.json())
                .then(data => {
                    setQuote(data[0].quote);
                    setAuthor(data[0].author);
                });
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div id="quote-box" className="card p-0">
            <p id="text"><i id="quotation-mark" className="bi bi-quote"></i>{ quote }</p>
            <div id="author" className="text-end fw-bold fs-4">- { author }</div>
            <div className="d-flex justify-content-end m-3">
                <a id="tweet-quote" 
                    className="btn me-2"
                    href={`https://twitter.com/intent/tweet/?text="${quote}" \n- ${author} \n&url=https://api-ninjas.com/api/quotes`}
                    target="_blank"
                    rel="noreferrer"
                    data-size="large"
                    >
                    <i id='twitter-logo' className="bi bi-twitter-x" ></i>
                    <span>tweet</span>
                </a>

                <button id="new-quote" onClick={fetchData} className="btn btn-dark me-2">new quote</button>
            </div>
        </div>
    )
}

/*-------------------- COMPONENT AS A CLASS --------------------*/
// class QuoteBox extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             quote: 'click new quote',
//             author: 'anonimous'
//         }
//         this.fetchQuote.bind(this)
//     }

//     // fetch method to get a quote from the API and update the state
//     fetchQuote = () => {
//         fetch('https://api.api-ninjas.com/v1/quotes?category=death', 
//             { 
//                 method: 'GET',
//                 headers: { 'X-Api-Key': 'mld4eL2AB8nMOUv/ps0BPQ==PsTqELe44JYs2UXT' } 
//             })
//             .then((response) => response.json())
//             .then((data) => {
//                 this.setState({
//                     quote: data[0].quote,
//                     author: data[0].author
//                 })
//             });
//     }

//     render() {
//         return (
//             <div id="quote-box" className="card">
//                 <h1>Random Quote Machine</h1>
//                 <div className="card">
//                     <p id="text">"{ this.state.quote }"</p>
//                     <div id="author" className="text-start fw-bold fs-4">author: { this.state.author }</div>

//                 </div>
//                 <div className="d-flex justify-content-end mt-3">
//                     <button id="new-quote" onClick={this.fetchQuote} className="btn btn-dark me-2 fs-5">new quote</button>

//                     <a id="tweet-quote" 
//                         className="btn btn-primary me-2 fs-5"
//                         href={`https://twitter.com/intent/tweet/?text="${this.state.quote}" ${this.state.author}&url=https://api-ninjas.com/api/quotes`}
//                         target="_blank"
//                         rel="noreferrer"
//                         data-size="large"
//                         >
//                         <span id="twitter-logo"></span>
//                         tweet
//                     </a>
//                 </div>
//             </div>
//         )
//     }
// }
