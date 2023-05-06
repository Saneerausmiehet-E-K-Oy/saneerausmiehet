import logo from "../assets/saneerausmiehet-circle.png";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <img src={logo} alt="Saneerausmiehet" style={{height: "50"}} />
          <a className='navbar-brand page-scroll' style={{paddingRight: 0}} href='#page-top'>
            Saneerausmiehet E.K Oy
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Tietoa meistä   
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Miksi me
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galleria
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Ota yhteyttä
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
