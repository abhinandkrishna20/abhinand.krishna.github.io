import dev from './about.webp';
const About = () => {
  return (
    <div class="container about" id='about'>cl
      <div className="row">
        <div className="col-md-6">
          <img src={dev} alt="" />
        </div>
        <div className="col-md-6">
      <h1>About Me</h1>
      <div>
        Hey, I'm Abhinand,  Computer Science graduate. I'm a software developer from Bangalore. I'm working on MERN Technology. I have 2 years of teaching experience and 1.5+ years of Web development. My area of interest is web development, debugging and problem solving.
      <br></br>

      My works are available on Github 
        
        <ul>
          <a href="https://github.com/abhinandkrishna20" target={"_blank"}>
          <li>GitHub</li></a>
          
        </ul>
      </div>
      </div>
      </div>
    </div>
  );
};
export default About;
