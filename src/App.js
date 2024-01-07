import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">My logo</a>
        <nav>
          <a href="" >Login</a>
          <a href="" >Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="img">
          <img 
            src="https://img.freepik.com/free-vector/many-cute-animals-bamboo-forest_1308-32851.jpg?size=626&ext=jpg" 
            alt="Post image" 
          />
        </div>
        <div className='texts'>
          <h2>Post title</h2>
          <p className='info'>
            <a  className="author">Nitish Kesarwani</a>
            <time>2024-01-07 22:12</time>
          </p>
          <p className='summary'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="img">
          <img 
            src="https://img.freepik.com/free-vector/many-cute-animals-bamboo-forest_1308-32851.jpg?size=626&ext=jpg" 
            alt="Post image" 
          />
        </div>
        <div className='texts'>
          <h2>Post title</h2>
          <p className='info'>
            <a  className="author">Nitish Kesarwani</a>
            <time>2024-01-07 22:12</time>
          </p>
          <p className='summary'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="img">
        <img 
          src="https://img.freepik.com/free-vector/many-cute-animals-bamboo-forest_1308-32851.jpg?size=626&ext=jpg" 
          alt="Post image" 
        />
        </div>
        <div className='texts'>
          <h2>Post title</h2>
          <p className='info'>
            <a className="author">Nitish Kesarwani</a>
            <time>2024-01-07 22:12</time>
          </p>
          <p className='summary'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
