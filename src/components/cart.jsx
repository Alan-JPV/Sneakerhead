const h1={
    display:'flex',
    width: '1000px',
    height: '143px',
    flexShrink:'0',
    color: '#000',
    fontFamily: "Just Me Again Down Here",
    fontSize: '128px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    marginLeft:'400px',
    marginTop:'50px'
}
function Cart(){
    return (
        <>
        <div style={{width: '1440px',height: '1024px'}}>
        <div>
            <h1 style={h1}>YOUR CART🛒</h1>
        </div>
        </div>
        </>
    )
}

export default Cart;