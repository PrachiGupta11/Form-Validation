import './content.css';
import Feedbackform from './FeedbackForm';
function Content() {
  return (
    <>
      <section className="grid-container">
        <div className="grid-item">
          <img src="https://th.bing.com/th/id/OIP.D4rU2a-5dQCKQtusDmlFRwHaKO?w=184&h=254&c=7&r=0&o=5&pid=1.7" height="250px" width="250px" />
          <br />
          <label style={{ fontFamily: "cursive", color: "gray" }}>Do you want to give feedback?</label>
          <button className='commentBtn'><a href='#popup-box' className='anchor'>Comment</a></button>
        </div>
        <div className="grid-item">
          <img src="https://th.bing.com/th/id/OIP.1P7MJF-Fc0TN_rgfegRplQAAAA?pid=ImgDet&w=182&h=264&c=7" height="250px" width="250px" />
          <br />
          <label style={{ fontFamily: "cursive", color: "gray" }}>Do you want to give feedback?</label>
          <button className='commentBtn'><a href='#popup-box' className='anchor'>Comment</a></button>
        </div>
        <div className="grid-item">
          <img src="https://th.bing.com/th/id/OIP.j13Zc4DNwYrjh6T6B_3mwwHaJF?w=920&h=1129&rs=1&pid=ImgDetMain" height="250px" width="250px" />
          <br />
          <label style={{ fontFamily: "cursive", color: "gray" }}>Do you want to give feedback?</label>
          <button className='commentBtn'><a href='#popup-box' className='anchor'>Comment</a></button>
        </div>

        <div id='popup-box' className='modal'>

          <Feedbackform />
          <a href='#' id='cross'>&times;</a>

        </div>
      </section>
      <footer style={{ backgroundColor: 'black',textAlign:'center', padding:'10px' }}>
        <label style={{ color: 'white', fontFamily: 'cursive' }}>&copy; 2024 RefreshTrendz</label>
      </footer>
    </>
  )
}

export default Content;