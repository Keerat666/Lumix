import React, { useState } from "react";
import Button from "../../components/Button";
import StarRating from "../../components/star-rating/StarRating";
import Image from "../../components/Image";
import LumixHeader from "../../components/Header";
import Rate from "../../components/Rate";
import { ProfileSkeleton } from "../../components/SkeletonLoaders/ProfileSkeleton";
import CircleSkeleton from "../../components/SkeletonLoaders/CircleSkeleton";
import RectangleSkeleton from "../../components/SkeletonLoaders/RectangleSkeleton";
import TableSkeleton from "../../components/SkeletonLoaders/TableSkeleton";
import { useThemeContext } from "../../context/themeContext";
import "./style.css"; // Create a separate CSS file for custom styles
import Loader from "../../components/Loading-spin/Loader";
import DropDown from "../../components/DropDown";
import CustomToast from "../../components/CustomToast";
import Accordion from "../../components/Accordion";


const Documentation = () => {
  const { theme } = useThemeContext();
// Toast for Primary Button
const primaryToast = CustomToast({
  message: "Primary Button Clicked!", 
  icon: "✅", 
});

// Toast for Warning Button
const warningToast = CustomToast({
  message: "Warning Button Clicked!",
  icon: "⚠️", 
});

// Toast for Danger Button
const dangerToast = CustomToast({
  message: "Danger Button Clicked!", 
  icon: "❌", 
});

  const [rating, setRating] = useState(0);
  const options = [
    { label: "Select...", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Transgender", value: "transgender" },
    { label: "Prefer Not to Say", value: "prefer not to say" },
  ];

  return (
    <div
      className={`d-flex flex-column min-vh-100 ${theme && "bg-dark text-light"
        }`}
    >
      {/* Header */}

      <LumixHeader></LumixHeader>
      {/* <DropDown options={options} /> */}
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
                handleOnClick={primaryToast.showToast}
                className="btn btn-primary btn-lg btn-block w-25"
              />
              <Button
                name="Warning Button"
                handleOnClick={warningToast.showToast}
                className="btn btn-warning btn-lg btn-block w-25 button-margin"
              />
              <Button
                name="Danger Button"
                handleOnClick={dangerToast.showToast}
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
                To create a rating component in Lumix, use the following code
                snippet:
              </h5>
              <pre>
                <code className="language-javascript">{"<StarRating />"}</code>
              </pre>

              <h5 className="section-subtitle">API:</h5>
              <ul>
                <li>
                  maxRating (default: 5) - allows you to set the number of
                  stars,
                </li>
                <li>color (default: "#fcc419") - changes the star color,</li>
                <li>
                  size (default: 24) - sets the height and width of a single
                  star,
                </li>
                <li>className - add a class to the rating element,</li>
                <li>
                  messages - an array of messages to be displayed instead of the
                  rating number,
                </li>
                <li>defaultRating (default: 0) - sets the initial rating,</li>
                <li>
                  onSetRating - allows you to add onSetRating function in case
                  the rating is needed outside the component,
                </li>
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
                To create a spinner component in Lumix, use the following code
                snippet:
              </h5>
              <pre>
                <code className="language-javascript">{"<Loader />"}</code>
              </pre>

              <h5 className="section-subtitle">API:</h5>
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
      <div>
        <Rate rating={rating} onRating={(rate) => setRating(rate)} />
        <p>Rating is {rating}</p>
      </div>

      <div className="container flex-grow-1 text-left">
        <div className="row">
          <div className="col-md-12">
            <div className="documentation-section mb-2">
              <h4 className="section-title">Lumix Accordion</h4>
              <p>
                Place your content in an expandable format with Lumix Accordion
              </p>
              <h5 className="section-subtitle">
                To create an accordion component in Lumix, use the following
                code snippet:
              </h5>
              <pre>
                <code className="language-javascript">{`<Accordion
                items={[
                  {
                    title: "Accordion Item 1,
                    content: "This is the content for accordion item 1."
                  }
                ]}
/>`}</code>
              </pre>
              <i>*Note: The items prop is an array of objects. Each object must have a title and content property.</i>
              <h5 className="section-subtitle">API:</h5>
              <ul>
                <li>
                  verticalAlignment (default: "flex-start") - sets the vertical alignment of the accordion
                </li>
                <li>
                  titleColor (default: "#dbd9d9") - sets the color of the title div
                </li>
                <li>width (default: 800) - sets the width of the component </li>
                <li>titleSize (default: 30) - sets the size of the font</li>
                <li>
                  contentSize (default: 20) - sets the size of the content font
                </li>
                <li>
                  contentColor (default: "#e8e6e6") - sets the color of the content div
                </li>
              </ul>
              <h5 className="section-title">Example Accordion:</h5>
              <Accordion
                items={[
                  {
                    title: "Accordion Item 1",
                    content: "This is the content for accordion item 1.",
                  },
                  {
                    title: "Accordion Item 2",
                    content:
                      "This is the content for accordion item 2.",
                  },
                  {
                    title: "Accordion Item 3",
                    content:
                      "This is the content for accordion item 3.",
                  },
                ]}
              />
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
                    To render this profile form of skeleton in Lumix, use the
                    following code snippet:
                  </h5>
                  <pre>
                    <code className="language-javascript">
                      {"<ProfileSkeleton />"}
                    </code>
                  </pre>
                  <ol type="a">
                    <li>
                      <p
                        style={{
                          fontStyle: "italic",
                          textDecoration: "underline",
                        }}
                      >
                        Circle
                      </p>
                      <CircleSkeleton customize />

                      <h5 className="section-subtitle">
                        To render this circular form of skeleton in Lumix, use
                        the following code snippet:
                      </h5>
                      <pre>
                        <code className="language-javascript">
                          {"<CircleSkeleton customize />"}
                        </code>
                      </pre>
                    </li>
                    <li>
                      <p
                        style={{
                          fontStyle: "italic",
                          textDecoration: "underline",
                        }}
                      >
                        Rectangle
                      </p>
                      <RectangleSkeleton customize />
                      <h5 className="section-subtitle">
                        To render this rectangle form of skeleton in Lumix, use
                        the following code snippet:
                      </h5>
                      <pre>
                        <code className="language-javascript">
                          {" <RectangleSkeleton customize />"}
                        </code>
                      </pre>
                    </li>
                  </ol>
                </li>
                <li>
                  Table
                  <div
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      overflowX: "scroll",
                      overflowY: "hidden",
                      marginBottom: "20px",
                    }}
                  >
                    <TableSkeleton columns={6} rows={6} customize />
                  </div>
                  <h5 className="section-subtitle">
                    To render this table form of skeleton in Lumix, use the
                    following code snippet:
                  </h5>
                  <pre>
                    <code className="language-javascript">
                      {"< TableSkeleton columns={6} rows={6} customize />"}
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
        &copy; Lumix - A HacktoberFest {new Date().getFullYear()} innovation!
      </footer>
    </div>
  );
};

export default Documentation;
