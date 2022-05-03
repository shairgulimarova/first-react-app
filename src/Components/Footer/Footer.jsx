import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <div style={{
        backgroundColor: "black",
        color:"white",
        textAlign:"center",
        marginTop:"20px",
        padding:"10px 0"
    }}>
        <div className="container">
            <p>Copyright. &copy; {date.getFullYear()}</p>
        </div>
    </div>
  )
}

export default Footer