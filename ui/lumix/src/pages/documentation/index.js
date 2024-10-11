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
import Tabs from "../../components/Tabs";

const Documentation = () => {
  const { theme } = useThemeContext();
  const handleOnClick = () => {
    alert("Handle onClick is called");
  };
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
              <h4 className="section-title">Lumix Tabs</h4>
              <p>Try out Lumix tabs component.</p>

              <h5 className="section-subtitle">
                To create a tabs component in Lumix, use the following code
                snippet:
              </h5>
              <pre>
                <code className="language-javascript">{`<Tabs
                tabsData={[
                  {
                    title: "Tab Title 1",
                    content: "Tab 1 content",
                    tabColor: "#fc0303" // optional
                    contentBackgroundColor: "#c4c0c0" // optional
                  },
                  {
                    title: "Tab Title 2",
                    content: "Tab 2 content",
                  }
                ]}
              />`}</code>
              </pre>
              <i>*Note: The tabsData prop is an array of objects. Each object must have at least a title and content property.</i>

              <h5 className="section-subtitle">API:</h5>
              <ul>
                <li>indicatorColor (default: '#fc0303') - sets the color of the tab indicator</li>
                <li>wrapperBackground (default: '#c4c0c0') - sets the color of the background for the wrapper</li>
                <li>titleSize (default: 20) - sets the font size of the title in each tab</li>
                <li>contentSize (default: 15) - sets the font size of the content in each tab</li>
                <li>width (default: 100) - sets the width of the tab component (based on % - max is 100%)</li>
                <li>tabsData <i>optional</i> properties:</li>
                <li style={{paddingLeft: "30px"}}>- tabColor (default: '#c4c0c0') - color of the tab</li>
                <li style={{paddingLeft: "30px"}}>- contentBackgroundColor (default: '#ebe8e8') - color of the background for the content</li>
              </ul>
              <h5 className="section-title">Example Tabs Component:</h5>
              <Tabs
                tabsData={[
                  {
                    title: "Tab Title 1",
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  },
                  {
                    title: "Tab Title 2",
                    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                  },
                  {
                    title: "Tab Title 3",
                    content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
                  }
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
