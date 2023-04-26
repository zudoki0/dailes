import React from 'react'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

const Nav = [
  {
    path: '/privatumas',
    display: 'Privatumo politika'
  },
  {
    path: '/pristatymas',
    display: 'Pristatymo politika'
  },
  {
    path: '/grazinimas-ir-garantija',
    display: 'Grąžinimas ir garantija'
  },
  {
    path: 'pirkimo-pardavimo-taisykles',
    display: 'Pirkimo-pardavimo taisyklės'
  }
]

const Footer = () => {
  return (
    <div className = "footer">
    <div className="company">Mūsų kompanija</div>
      {
        Nav.map((item) => (
            <div>
                <Link to={item.path}>
                    <span className='links'>
                        {item.display}
                    </span>
                </Link>
            </div>
        ))
      }
    </div>
  )
}

export default Footer