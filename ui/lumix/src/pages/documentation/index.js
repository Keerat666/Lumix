import React from "react";
import Button from "../../components/Button";
import StarRating from "../../components/star-rating/StarRating";
import Image from "../../components/Image";
import LumixHeader from "../../components/Header";
import { ProfileSkeleton } from "../../components/SkeletonLoaders/ProfileSkeleton";
import CircleSkeleton from "../../components/SkeletonLoaders/CircleSkeleton";
import RectangleSkeleton from "../../components/SkeletonLoaders/RectangleSkeleton";
import TableSkeleton from "../../components/SkeletonLoaders/TableSkeleton";
import { useThemeContext } from "../../context/themeContext";

import "./style.css"; // Create a separate CSS file for custom styles
import Loader from "../../components/Loading-spin/Loader";


const Documentation = () => {
  const {theme} = useThemeContext()
  const handleOnClick = () => {
    alert("Handle onClick is called");
  };

  return (
    <div className={`d-flex flex-column min-vh-100 ${theme && "bg-dark text-light"}`}>
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
              <h4 className="section-title">Lumix Star Rating</h4>
              <p>Try out Lumix star rating component.</p>

              <h5 className="section-subtitle">
                To create a rating component in Lumix, use the following code snippet:
              </h5>
              <pre>
                <code className="language-javascript">
                  {'<StarRating />'}
                </code>
              </pre>

              <h5 className="section-subtitle">
                API:
              </h5>
              <ul>
                <li>maxRating (default: 5) - allows you to set the number of stars,</li>
                <li>color (default: "#fcc419") - changes the star color,</li>
                <li>size (default: 24) - sets the height and width of a single star,</li>
                <li>className - add a class to the rating element,</li>
                <li>messages - an array of messages to be displayed instead of the rating number,</li>
                <li>defaultRating (default: 0) - sets the initial rating,</li>
                <li>onSetRating - allows you to add onSetRating function in case the rating is needed outside the component,</li>
              </ul>
              <h5 className="section-title">Example Rating Component:</h5>
              <StarRating />
            </div>
          </div>
        </div>
      </div>

      <div className="container flex-grow-1 text-left">
        <div className="row">
          <div className="col-md-12">
            <div className="documentation-section mb-2">
              <h4 className="section-title">Lumix Spinner</h4>
              <p>Try out Lumix Spinner Component</p>

              <h5 className="section-subtitle">
                To create a spinner component in Lumix, use the following code snippet:
              </h5>
              <pre>
                <code className="language-javascript">
                  {'<Loader />'}
                </code>
              </pre>

              <h5 className="section-subtitle">
                API:
              </h5>
              <ul>
                <li>width - sets the width of the spinner</li>
                <li>height - sets the height of the spinner</li>        
              </ul>
              <h5 className="section-title">Example Spinner Component:</h5>
              <Loader />
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

      <div className="container flex-grow-1 text-left">
        <div className="row">
          <div className="col-md-12">
            <div className="documentation-section mb-2">
              <h4 className="section-title">Lumix Skeleton loaders</h4>
              <ol>
                <li>
                  Profile
                  <ProfileSkeleton />
                  <h5 className="section-subtitle">
                    To render this profile form of skeleton in Lumix, use the following code snippet:
                  </h5>
                  <pre>
                    <code className="language-javascript">
                      {
                        '<ProfileSkeleton />'
                      }
                    </code>
                  </pre>

                  <ol type="a">
                    <li>
                      <p style={{ fontStyle: "italic", textDecoration: "underline" }}>Circle</p>
                      <CircleSkeleton customize />

                      <h5 className="section-subtitle">
                        To render this circular form of skeleton in Lumix, use the following code snippet:
                      </h5>
                      <pre>
                        <code className="language-javascript">
                          {
                            '<CircleSkeleton customize />'
                          }
                        </code>
                      </pre>
                    </li>
                    <li>
                      <p style={{ fontStyle: "italic", textDecoration: "underline" }}>Rectangle</p>
                      <RectangleSkeleton customize />
                      <h5 className="section-subtitle">
                        To render this rectangle form of skeleton in Lumix, use the following code snippet:
                      </h5>
                      <pre>
                        <code className="language-javascript">
                          {
                            ' <RectangleSkeleton customize />'
                          }
                        </code>
                      </pre>
                    </li>
                  </ol>
                </li>
                <li>
                  Table
                  <div style={{ display: "block", maxWidth: "100%", overflowX: "scroll", overflowY: "hidden", marginBottom: "20px" }}>
                    <TableSkeleton columns={6} rows={6} customize />
                  </div>
                  <h5 className="section-subtitle">
                    To render this table form of skeleton in Lumix, use the following code snippet:
                  </h5>
                  <pre>
                    <code className="language-javascript">
                      {
                        '< TableSkeleton columns={6} rows={6} customize />'
                      }
                    </code>
                  </pre>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-2">
        &copy; Lumix - A HacktoberFest 2023 innovation!
      </footer>
    </div >
  );
};

export default Documentation;
