import { Link } from "react-router-dom"

const CardComment = ({avatarUrl, name, children, id}) => {

    const {card, avatar, box, userName, text} = style
  
    return (
      <Link to={`/user/${id}`}>
          <div style={card}>
              <img src={avatarUrl} style={avatar} alt="Foto do Fulano"/>
              <div style={box}>
                  <h1 style={userName}>{name}</h1>
                  <p style={text}>{children}</p>
              </div>
          </div>
      </Link>
    )
  }
  
  const style = {
      avatar: {
          background: '#CCC',
          borderRadius: '50%',
          height: '50px',
          width: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 10px 0 0'
      },
      card: {
          width: '300px',
          background: '#EEE',
          display: 'flex',
          padding: '10px',
          borderRadius: '10px',
          margin: '15px'
      },
      userName: {
          margin: 0,
          fontSize: '0.9rem'
      },
      text: {
          margin: 0
      },
      box: {
          width: '235px'
      }
  
  }
  
  export default CardComment