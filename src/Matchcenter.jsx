function Matchcenter() {
    return (
      <div>
      <div className="match-container">
        <div className="match-header">
          <div className="match-info">
            <img src="src/ball.svg" alt="" className="ball-icon" />
            <span className="match-title">MATCH 4, SUNRISERS HYDERABAD VS RAJASTHAN ROYALS</span>
          </div>
          <p className="match-time">APR 02, 2023 | 7:30 PM IST</p>
        </div>
  
        <div className="match-status">
          
          <span className="status-dot"></span>
         <span className="status-text">Live</span>
         
        </div>
  
        <div className="score-section">
          <div className="team">
          <div class="team-logo color">
            <img src="src/teamss.svg" />
           </div>
            <div className="team-score">
              <p className="main-score">108/2 <span className="overs">(20)</span></p>
              <p className="sub-score">14/1 <span className="overs">(1.0)</span></p>
              <p className="sub-score">15/0 <span className="overs">(0.5)</span></p>
            </div>
          </div>
          <div className="vs">vs</div>
          <div className="team">
          <div class="team-logo">
            <img src="src/teamss.svg" />
           </div>
            <div className="team-score">
              <p className="main-score">108/2 <span className="overs">(20)</span></p>
              <p className="sub-score">14/1 <span className="overs">(1.0)</span></p>
              <p className="sub-score">15/0 <span className="overs">(0.5)</span></p>
            </div>
          </div>
        </div>
  
        <div className="match-summary">
          Sunrisers Hyderabad needs 30 runs from 11 balls to win
        </div>
  
        <div className="venue">
          <img src="src/stadium.svg" alt="" className="venue-icon" />
          Rajiv Gandhi International Stadium, Hyderabad
        </div>
         <div className="players-data">
        <div className="players-section">
          <div className="section-header">
            <h3 className="section-title">Batters</h3>
          </div>
          <div className="players">
            <div className="player">
              <span className="player-name">A. Markram </span>
              <span className="player-score">
                <span className="highlight"> 100* </span>
                <span className="highlight">(67)</span>
              </span>
            </div>
            <div className="player">
              <span className="player-name"> R. Tripathi </span>
              <span className="player-score">
              <span className="highlight"> 45 </span>
                <span className="highlight">(67)</span>
              </span>
            </div>
          </div>
        </div>
  
        <div className="players-section">
          <div className="section-header">
            <h3 className="section-title">Bowlers</h3>
          </div>
          <div className="players">
            <div className="player">
              <span className="player-name"> T. Boult </span>
              <span className="player-score">
                <span className="highlight">2/17</span>
                <span className="highlight">(3)</span>
              </span>
            </div>
            <div className="player">
              <span className="player-name"> Y. Chahal </span>
              <span className="player-score">
                <span className="highlight">1/10</span>
                <span className="highlight">(2)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
       
      <div className="latestUpdates-container">
  <div className="header">
    <h2>Latest Updates</h2>
    <a href="/" className="more-button">See More</a>
    
  </div>

  <div className="news-card">
    <div className="news-card-primary">
    <div className="main-card">
      <img src="/src/team.png" className="mainImg" />
      <p className="news-text">
        Royal challengers banglore got back to winning, ways after defeat against chennai super kings
      </p>
      <div className="news-header">
        <p className="news">News</p>
        <img src="/src/share.svg" className="shareImg" />
      </div>
      <div className="bottom-border"></div> 
    </div>
    <div className="main-card">
      <img src="/src/team.png" className="mainImg" />
      <p className="news-text">
        Royal challengers banglore got back to winning, ways after defeat against chennai super kings
      </p>
      <div className="news-header">
        <p className="news">News</p>
        <img src="/src/share.svg" className="shareImg" />
      </div>
      <div className="bottom-border"></div> 
    </div>
   
    </div>

    <div className="news-card-secondary">

    <div className="sub-cards">
      <div className="card-content">
        <p className="news-text">
          Royal challengers banglore got back to winning, ways after defeat against chennai super kings
        </p>
        <div className="news-header">
          <p className="news">News</p>
          <img src="/src/share.svg" className="shareImg" />
        </div>
      </div>
      <img src="/src/team.png" className="card-image" />
     
    </div>
   

   
    <div className="sub-cards">
      <div className="card-content">
        <p className="news-text">
          Royal challengers banglore got back to winning, ways after defeat against chennai super kings
        </p>
        <div className="news-header">
          <p className="news">News</p>
          <img src="/src/share.svg" className="shareImg" />
        </div>
      </div>
      <img src="/src/team.png" className="card-image" />
     
    </div>
  
    <div className="sub-cards">
      <div className="card-content">
        <p className="news-text">
          Royal challengers banglore got back to winning, ways after defeat against chennai super kings
        </p>
        <div className="news-header">
          <p className="news">News</p>
          <img src="/src/share.svg" className="shareImg" />
        </div>
      </div>
      <img src="/src/team.png" className="card-image" />
     
    </div>
    <div className="sub-cards">
      <div className="card-content">
        <p className="news-text">
          Royal challengers banglore got back to winning, ways after defeat against chennai super kings
        </p>
        <div className="news-header">
          <p className="news">News</p>
          <img src="/src/share.svg" className="shareImg" />
        </div>
      </div>
      <img src="/src/team.png" className="card-image" />
     
    </div>
    </div>
  </div>
     </div>
   
    </div>
    );
  }
  
  export default Matchcenter;
  