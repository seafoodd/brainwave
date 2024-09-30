import Section from "./Section.jsx";
import { benefits } from "../constants/index.js";
import Card from "./Card.jsx";

const Features = () => {
  return (
    <Section className="relative py-10 lg:py-16 xl:py-20">
      <div className="container relative z-2">
        <div className="md:max-w-md lg:max-w-2xl max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center">
          <h2 className="h2">Chat Smarter, Not Harder with Brainwave</h2>
        </div>
        <div className="flex flex-wrap gap-10 mb-10 ">
          {benefits.map(
            ({ id, title, text, backgroundUrl, iconUrl, imageUrl, light }) => (
              <Card
                key={id}
                title={title}
                text={text}
                backgroundUrl={backgroundUrl}
                iconUrl={iconUrl}
                imageUrl={imageUrl}
                light={light}
              />
            ),
          )}
        </div>
      </div>
    </Section>
  );
};

export default Features;
