'use client'
import { JSX, SVGProps } from "react"
import { NavBar } from "./nav-bar"
import animationData from "@/assets/idea-anim.json"
import { Button, ButtonGroup, Card, CardBody, CardFooter, Link, CardHeader, Divider, Image, Input } from "@nextui-org/react"
import Footer from "./footer"

const isBrowser = typeof window !== "undefined";

export function HomePage() {
  return(
      <>
      
        <NavBar/>
        <section className="bg-gradient-to-r from-transparent to-gray-900 items-center">
        <section className="w-90% py-6 md:py-12 lg:py-16 flex item-center justify-center space-y-30 mb-12">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:flex-row md:px-6 lg:gap-16">
            <div className="space-y-6 md:mr-10 lg:mr-16 md:space-y-8">
              <div className="space-y-2">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl my-6">Find your next big idea</h1>
                <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
                  The platform for discovering untapped potential. Enter your ideas below to see if they have already been
                  explored.
                </p>
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 md:items-center">
              <Input type="text" label="Enter your own idea" className=""/>
              <Button color="success" size="lg"> Search </Button>
            </div>
            </div>

            <Card
              isFooterBlurred
              radius="lg"
              className="border-none hover:shadow-2xl transition-shadow duration-300 relative w-full md:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] before:rounded-xl"
            >
              <Image
                alt="An Image of idea generation"
                className="object-cover"
                height={600}
                src="https://www.elmhurst.edu/wp-content/uploads/2022/04/generate-ideas-illustration.jpg"
                width={600}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                  Notify me
                </Button>
              </CardFooter>
            </Card>

            {/* <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-video"
              height="300"
              src="https://res.cloudinary.com/djirdehhp/image/upload/v1633940003/idea-anim_1.gif"
              width="500"
            /> */}
            
          </div>
        </section>
        <section className="w-full flex flex-col gap-4 py-8 px-4 md:gap-10 md:px-6 items-center justify-center my-20 space-x-4">
          <div className="grid gap-4 md:grid-cols-2 item-center justify-center max-w-[80%]">

        <Card className="min-w-[100%] bg-gray-900 text-white hover:bg-gray-800">
          <CardHeader className="flex gap-3">
            <p className="text-4xl font-bold">How it works</p>
          </CardHeader>
          <Divider className="bg-black"/>
          <CardBody>
            <p className="text-lg">Our AI-powered platform scans the 
              web for related content and returns
              a comprehensive report on the originality of your idea.</p>
          </CardBody>
          <Divider className="bg-black"/>
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/"
            >
              Visit source code on GitHub
            </Link>
          </CardFooter>
        </Card>

            {/* <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How it works</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Our AI-powered platform scans the web for related content and returns a comprehensive report on the
                originality of your idea.
              </p>
            </div> */}
            <div className="flex flex-col space-between items-center space-y-4 space-x-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl sm:my-10 mb-6">Key features</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold">Real-time analysis</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get instant feedback on the originality of your idea.
                    </p>
                  </div>
                  </Card>
                </li>
                <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4">
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
                  <Card className="bg-gray-900 text-white p-4">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold">Collaboration tools</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Share your findings with team members and experts.
                    </p>
                  </div>
                  </Card>
                </li>
                <li className="flex space-x-4">
                  <Card className="bg-gray-900 text-white p-4">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 my-2" />
                  <div>
                    <h3 className="font-semibold">Customizable alerts</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Set up notifications for new developments in your field.
                    </p>
                  </div>
                  </Card>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="min-w-[100%] flex flex-col py-8 px-4 items-center justify-center my-20">
          <Card className="flex items-center justify-center bg-gray-900 text-white my-10">
            <section className="py-12 flex items-center justify-center my-14">
              <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to get started?</h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Sign up today and <br/> unlock the power of idea detection.
                  </p>
                </div>
                <div className="w-full max-w-[400px] space-y-10">
                  <Input placeholder="Enter your email" className="bg-gray-800" variant="flat" type="email" isClearable/>
                  <Button color="primary" className="w-full h-10 my-10" variant="shadow" type="submit">Sign Up</Button>
                </div>
              </div>
            </section>
          </Card>
        </section>
        {/* Footer */}
        
        <Footer/>
      </section>
    </>
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 7v11a2 2 0 1-2 2H5a2 1-2-2z" />
      <polyline points="9 22 12 15" />
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
