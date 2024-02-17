import { Accordion, AccordionItem } from "@nextui-org/react";

function Faqs(){

    const Content_1 = (
        <div>Ideete is an innovative platform empowering users to refine ideas with cutting-edge technology. It offers a seamless experience, enabling users to scrutinize idea uniqueness. Through algorithms, Ideete provides insights and personalized suggestions. Whether you are an entrepreneur, artist, or thinker, Ideete guides you in refining ideas to perfection.</div>
      );
      const Content_2 = (
        <div>Users can effortlessly submit their ideas through the platform, where their uniqueness is meticulously evaluated against existing ones. If an idea lacks originality, Ideete offers tailored suggestions to help differentiate it from the rest, ensuring each concept stands out and thrives in the competitive landscape.</div>
      );
      const Content_3 = (
        <div>Begin your Ideete journey by visiting our website and registering for an account. Once signed up, unleash your creativity by submitting ideas and refining them using our intuitive platform. Join a community of innovators and turn your concepts into reality with Ideete support and guidance.</div>
      );
    return (
    <>
    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
      variant="splitted"
      className="my-5"
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="What is Ideete?">
        {Content_1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How does Ideete work?">
        {Content_2}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="How can I get started with Ideete?">
        {Content_3}
      </AccordionItem>
    </Accordion>
    </>
    );
}

export default Faqs;

{/*
export default function App() {
  const Content_1 = (
    <div>Ideete is a platform designed to help users refine and enhance their ideas by checking their uniqueness and providing personalized suggestions for improvement.</div>
  );
  const Content_2 = (
    <div>Users can submit their ideas through the platform, which then checks the uniqueness of those ideas against existing ones. If an idea lacks uniqueness, the platform offers personalized suggestions to differentiate it from existing ideas.</div>
  );
  const Content_3 = (
    <div>To get started with Ideete, simply visit our website and sign up for an account. Once registered, you can start submitting your ideas and refining them with the help of our platform.</div>
  );

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="What is Ideete?">
        {Content_1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How does Ideete work?">
        {Content_2}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="How can I get started with Ideete?">
        {Content_3}
      </AccordionItem>
    </Accordion>
  );
*/}