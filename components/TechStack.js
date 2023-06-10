function TechStack() {
    const imageContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "150px", // Adjust the height as needed
    };
  
    const imageStyle = {
      height: "60%",
      width: "auto",
    };
  
    const titleStyle = {
      marginTop: "8px", // Add spacing between the image and title
    };
  
    return (
      <div className="flex justify-center items-center mx-20 my-20">
        <div className="grid grid-cols-4 gap-10 text-center ">
          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/python.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Python</h3>
          </div>
  
          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/java.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Java</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/javascript.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>JavaScript</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/css3.png" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>CSS 3</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/html5.png" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>HTML 5</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/c++.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>C++</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/git.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Git</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/github.png" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>GitHub</h3>
          </div>


          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/nextjs.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Next.JS</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/nodejs.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Node.JS</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/inventor.png" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}> Autodesk Inventor</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/tailwind.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Tailwind.CSS</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/vercel.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Vercel</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/figma.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Figma</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/photoshop.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Adobe Photoshop</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/premirepro.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Adobe Premire Pro</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/indesign.png" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Adobe InDesign</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/jira.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Atlassian Jira</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/confluence.svg" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Atlassian Confluence</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/notion.png" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Notion</h3>
          </div>

          <div className="image-container" style={imageContainerStyle}>
            <img
              src="tech stack/android.png" // Replace with the actual image URL
              alt="Image"
              style={imageStyle}
            />
            <h3 style={titleStyle}>Android Studio - Java </h3>
          </div>
  
  
          {/* Add more image-container elements for additional images */}
        </div>
      </div>
    );
  }
  
  export default TechStack;
  