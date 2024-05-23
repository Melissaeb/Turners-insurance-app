import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./VehicleRecognition.module.css";

export default function VehicleRecognition() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [tag, setTag] = useState("");
  const [error, setError] = useState("");
  const [bodyStyle, setBodyStyle] = useState("");

  const vehicleBodyStyles = [
    "sports utility vehicle",
    "hatchback",
    "sedan",
    "coupe",
    "truck",
    "convertible",
    "minivan",
    "van",
    "station wagon",
    "pickup truck",
  ];

  const apiHost = import.meta.env.VITE_API_HOST;
  // const apiHost = "https://vehicle-recognition-server.azurewebsites.net";

  useEffect(() => {
    if (imageUrl) {
      setImageSrc(imageUrl);
    } else if (imageFile) {
      setImageSrc(URL.createObjectURL(imageFile));
    } else {
      setImageSrc("src/assets/jimny.png");
    }
  }, [imageUrl, imageFile]);

  const handleAnalyse = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        response = await axios.post(`${apiHost}/analyse-upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else if (imageUrl) {
        response = await axios.post(`${apiHost}/analyse-url`, {
          imageUrl,
        });
      } else {
        setError("Please provide an image URL or upload a file.");
        return;
      }

      const tags = response.data.tags;

      console.log(response.data.tags);
      const vehicleTags = tags.filter((tag) =>
        vehicleBodyStyles.includes(tag.name.toLowerCase())
      );
      const bestTag = vehicleTags.reduce(
        (prev, current) =>
          prev.confidence > current.confidence ? prev : current,
        { name: "", confidence: 0 }
      );

      if (bestTag.name) {
        setTag(`Looking for something else? Please share another image.`);
        setBodyStyle(bestTag.name);
      } else {
        setBodyStyle("Not found");
        setTag("No vehicle body style detected. Please share another image.");
      }

      setError("");
    } catch (err) {
      setError("Error analysing image");
      setTag("");
    }
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
    setImageFile(null);
    setTag("");
    setError("");
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
    setImageUrl("");
    setTag("");
    setError("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.writing}>
          <div className={styles.titles}>
            <h1 className={styles.title}>AutoDetect</h1>
            <h2 className={styles.subtitle}>
              AI-Powered Vehicle Recognition & Insurance Insights
            </h2>
          </div>

          <p className={styles.description}>
            Welcome to AutoDetect! Snap a photo or provide a vehicle URL, and
            our cutting-edge technology will analyse it for you. Receive
            personalized insurance quotes based on similar vehicles in our
            database. Get started now to ensure you're covered with the best
            rates for your ride!
          </p>

          <form className={styles.imageForm}>
            <input
              type="text"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={handleUrlChange}
              className={styles.urlInput}
            />
            <p className={styles.or}>or</p>
            <input
              type="file"
              onChange={handleFileChange}
              className={`${styles.fileInput} ${
                !imageFile ? styles.noFile : ""
              }`}
            />
            <button
              onClick={handleAnalyse}
              type="submit"
              className={styles.submitBtn}
            >
              ANALYSE
            </button>
          </form>

          {tag && (
            <div>
              <h2 className={styles.resultTitle}>Result: {bodyStyle}</h2>
              <p className={styles.result}>{tag}</p>
            </div>
          )}

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        {imageSrc && (
          <img src={imageSrc} alt="Vehicle" className={styles.vehicleImage} />
        )}
      </div>
    </div>
  );
}
