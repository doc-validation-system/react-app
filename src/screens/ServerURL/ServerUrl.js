import React from 'react'

class ServerUrl extends React.Component {
    url = "";

    handleUrl = (e) => {
        this.url = e.target.value;
        console.log(this.url);
    }
    
    handleSubmit = () => {
        localStorage.setItem("URL", this.url);
        window.open("/", "_self");
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                <h1>Enter your Server URL</h1>
                <input type="text" placeholder='Enter the server url' aria-required size="64" onChange={this.handleUrl} style={{marginBottom: "16px", padding: "4px", fontSize: "18px", outline: "none", border: "1px solid gray", borderRadius: "3px"}}/>
                <button onClick={this.handleSubmit} style={{padding: "4px 32px", fontSize: "16px", cursor: "pointer"}}>Submit</button>
            </div>
        )
    }
}

export default ServerUrl;