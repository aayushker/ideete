'use client'
import React, { JSX, SVGProps } from "react"
import { NavBar } from "./nav-bar"
import { useScroll, useTransform } from "framer-motion";
import animationData from "@/assets/idea-anim.json"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Link, CardHeader, Divider, Image, Input, Textarea} from "@nextui-org/react"
import Footer from "./footer"
import { GoogleGeminiEffect } from "./ui/gemini-effect";
import Faqs from "./faqs";
import { TextGenerateEffect } from "./ui/textgenerate";
import { Spotlight } from "./ui/spotlight";
//import { Textarea } from "@/components/ui/textarea"

const isBrowser = typeof window !== "undefined";

export function HomePage() {

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
 

  return(
      <>
        <div className="bg-gray-960 bg-dot-white/[0.5]">
        <section className="bg-gradient-to-r from-transparent to-gray-950 items-center">
        <section className="w-90% py-6 md:py-12 lg:py-16 flex item-center justify-center space-y-30 mb-12">
          <Spotlight
          className="-right-40 md:left-60 md:-top-20"
          fill="white"
          />
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:flex-row md:px-6 lg:gap-16">
            <div className="space-y-6 md:mr-10 lg:mr-16 md:space-y-8">
              <div className="space-y-2 max-sm:mx-12">
                <TextGenerateEffect words="Find your next big idea" className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter sm:text-4xl my-6"/>
                {/* <h1 className=" text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter sm:text-4xl my-6">Find your next big idea</h1> */}
                <TextGenerateEffect className="text-2xl max-w-[700px] text-gray-500 md:text-2xl dark:text-gray-400"
                  words="The platform for discovering untapped potential. Enter your ideas below to see if they have already been
                  explored."/>
              </div>  
                <Card isBlurred className="mt-10 max-sm:mx-1 px-10 py-5 lg:h-[300px]">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 md:items-center max-sm:flex max-sm:items-center max-sm:mx-auto">
                <Textarea
                  variant="underlined"
                  color="success"
                  rows={3}
                  placeholder="Enter Your Idea"
                  className="text-white"
                />

                <Button color="success" size="lg" className="font-bold"> Search </Button>
                </div>
                </Card>
            </div>

            <Card
              isFooterBlurred
              radius="lg"
              className="bg-black relative lg:h-[600px] h-[40vh] overflow-hidden rounded-xl shadow-small before:bg-gray-900 max-sm:mx-1 mt-10"
            >
              <Image
                alt="An Image of idea generation"
                className="object-fill w-full h-full"
                height={600}
                src="https://images.unsplash.com/photo-1529310399831-ed472b81d589?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={600}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 h-50">
                <p className="text-tiny text-white/50">Explore More</p>
                <Button className="text-tiny text-white bg-black/20" variant="light" color="default" radius="lg" size="lg">
                  Vision
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <div
          className="h-[350vh] w-full dark:border dark:border-white/[0.1] relative pt-20 pb-20 md:pt-40 lg:pt-20"
          ref={ref}>

          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
            className="h-[100vh] w-full"
          />

        </div>
        <section className="w-full flex flex-col gap-4 py-8 md:gap-10 md:px-6 items-center justify-center my-5 space-x-4 lg:mt-20">
          <div className="grid gap-4 md:grid-cols-2 item-center justify-center max-w-[90%]">

        <Card className="min-w-[90%] bg-gray-900 text-white hover:bg-gray-850 p-10">
          <CardHeader className="flex gap-3">
            <p className="text-4xl font-bold">How it works</p>
          </CardHeader>
          <Divider className=" bg-gray-600"/>
          <CardBody className="py-10">
            <p className="text-lg">Our AI-powered platform scans the 
              web for related content and returns
              a comprehensive report on the originality of your idea.</p>
          </CardBody>
          <Divider className="bg-green-600"/>
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/YadavYashvant/Ideete"
            >
              Visit source code on GitHub
            </Link>
          </CardFooter>
        </Card>
            <div className="flex flex-col space-between items-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl sm:my-10 mb-6 max-sm:mt-10">Key features</h2>
              <ul className="max-sm:min-w-[95%] grid gap-5 sm:grid-cols-2 max-sm:flex-col max-sm:items-center">
              <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4 hover:bg-gray-800 max-sm:p-28">
                  <CheckCircleIcon className="h-6 w-7 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold max-sm:text-2xl">Real-time analysis</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-sm:text-xl">
                     Get instant feedback on the originality of your idea.
                    </p>
                  </div>
                  </Card>
                </li>
                <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4 hover:bg-gray-800 max-sm:p-28">
                  <CheckCircleIcon className="h-6 w-7 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold max-sm:text-2xl">Comprehensive search</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-sm:text-xl">
                     Our platform scours the web to find similar concepts.
                    </p>
                  </div>
                  </Card>
                </li>
                <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4 hover:bg-gray-800 max-sm:p-28">
                  <CheckCircleIcon className="h-6 w-7 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold max-sm:text-2xl">Collaboration tools</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-sm:text-xl">
                     Share your findings with team members and experts.
                    </p>
                  </div>
                  </Card>
                </li>
                {/* <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4 hover:bg-gray-800">
                  <CheckCircleIcon className="h-5 w-6 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold">Real-time analysis</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get instant feedback on the originality of your idea.
                    </p>
                  </div>
                  </Card>
                </li>
                <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4 hover:bg-gray-800">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold">Comprehensive search</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Our platform scours the web to find similar concepts.
                    </p>
                  </div>
                  </Card>
                </li>
                <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4 hover:bg-gray-800">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold">Collaboration tools</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Share your findings with team members and experts.
                    </p>
                  </div>
                  </Card>
                </li> */}
                <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4 hover:bg-gray-800 max-sm:p-28">
                  <CheckCircleIcon className="h-6 w-7 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold max-sm:text-2xl">Customizable alerts</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-sm:text-xl">
                      Set up notifications for new developments in your field.
                    </p>
                  </div>
                  </Card>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col py-8 px-2 items-center justify-center my-10">
          <Card className="min-w-[90%] bg-gray-900 text-white my-10">
            <section className="py-12 flex items-center justify-center my-14">
              <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Sign up today and <br/> unlock the power of idea detection.
                  </p>
                </div>
                <div className="w-full max-w-[400px] space-y-10">
                  <Input 
                  placeholder="Enter your email"
                  color="success"
                  classNames={{innerWrapper: "bg-gray-800", input: "text-white"}}
                  className="color-white"
                  variant="underlined" 
                  type="email" 
                  isClearable
                  />
                  <Button color="success" className="w-full h-10 my-10" variant="shadow" type="submit">Sign Up</Button>
                </div>
              </div>
            </section>
          </Card>

          <Card className="p-10 bg-gray-800 w-[90%] flex items-center justify-center">
          <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl sm:my-10 max-sm:mt-10">FAQs</h2>
          <Faqs/>
          </Card>

        </section>
        {/* Footer */}
        
        <Footer/>
      </section>
      </div>
    </>
  )
}


function IdeaIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
    </svg>
  )
}


function CheckCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
