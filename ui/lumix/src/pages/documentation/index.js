import React, { useState } from "react";
import Button from "../../components/Button";
import Image from "../../components/Image";
import "./style.css"; // Create a separate CSS file for custom styles
import LumixHeader from "../../components/Header";
import Rate from "../../components/Rate";

const Documentation = () => {
  const handleOnClick = () => {
    alert("Handle onClick is called");
  };
  const [rating, setRating] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}

      <LumixHeader></LumixHeader>

      <div className="container flex-grow-1 text-left">
        <div className="row">
          <div className="col-md-12">
            <div className="documentation-section mb-2">
              <h4 className="section-title">Lumix Buttons</h4>
              <p>Discover the various buttons within Lumix.</p>

              <h5 className="section-subtitle">
                To create a button in Lumix, use the following code snippet:
              </h5>
              <pre>
                <code className="language-javascript">
                  {'<Button name={"Click me"} handleOnClick={handleOnClick} />'}
                </code>
              </pre>

              <h5 className="section-title">Example Buttons:</h5>
              <Button
                name="Primary Button"
                handleOnClick={handleOnClick}
                className="btn btn-primary btn-lg btn-block w-25"
              />
              <Button
                name="Warning Button"
                handleOnClick={handleOnClick}
                className="btn btn-warning btn-lg btn-block w-25 button-margin"
              />
              <Button
                name="Danger Button"
                handleOnClick={handleOnClick}
                className="btn btn-danger btn-lg btn-block w-25 button-margin"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex-grow-1 text-left">
        <div className="row">
          <div className="col-md-12">
            <div className="documentation-section mb-2">
              <h4 className="section-title">Lumix Image Tags</h4>
              <p>Get the scoop on Lumix image tags.</p>

              <h5 className="section-subtitle">
                To render an image in Lumix, use the following code snippet:
              </h5>
              <pre>
                <code className="language-javascript">
                  {
                    '<Image src="https://placehold.co/300x300" alt="Image in Lumix" onClick={handleOnClick}></Image>'
                  }
                </code>
              </pre>

              <h5 className="section-title">Example Image:</h5>
              <Image
                src="https://placehold.co/300x300"
                alt="Image in Lumix"
                onClick={handleOnClick}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Rate rating={rating} onRating={(rate) => setRating(rate)} />
        <p>Rating is {rating}</p>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-2">
        &copy; Lumix - A HacktoberFest 2023 innovation!
      </footer>
    </div>
  );
};

export default Documentation;
