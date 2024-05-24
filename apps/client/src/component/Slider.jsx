import './Slider.css'

const images = [
    "./src/assets/templates/jpg/azurill.jpg",
    "./src/assets/templates/jpg/bronzor.jpg",
    "./src/assets/templates/jpg/chikorita.jpg",
    "./src/assets/templates/jpg/ditto.jpg",
    "./src/assets/templates/jpg/gengar.jpg",
  ];


const Slider = () => {
  return (
   
      <div
        className="container"
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="template_container"
          style={{
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <h1>Template</h1>
          <div style={{ textAlign: "center" }}>
            Explore the templates available in Reactive Resume and view the
            resumes crafted with them. They could also serve as examples to help
            guide the creation of your next resume.
          </div>
        </div>
        <div className="horizontal_scroll" style={{ padding: "20px" }}>
          <div className="App">
            <div className="horizontal-scroll">
              <div className="image-track">
                {images.map((src, index) => (
                  <div className="image-container" key={index}>
                    <img
                      src={src}
                      alt={`Scenery ${index + 1}`}
                      className="image"
                    />
                  </div>
                ))}
                {images.map((src, index) => (
                  <div className="image-container" key={index + images.length}>
                    <img
                      src={src}
                      alt={`Scenery ${index + 1}`}
                      className="image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
     
  )
}

export default Slider