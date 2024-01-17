import WidthControlledComponent from "@/components/widthControlled"

export default function ResumePage() {
  return (
    <main className="flex flex-col items-center">
      {/* <p>Download my resume</p> */}
      <WidthControlledComponent>
        <p className="my-5 text-bluegreen italic">* formatted to fit on smaller screens</p>
      </WidthControlledComponent>
      <div className="flex flex-col w-[93%] md:w-[75%] md:flex-row">
        <div className="flex flex-1 flex-col">
          <div className="bg-cobalt p-6 [&>p]:text-white">
            <p className="m-0 font-semibold text-3xl">Paolo Frias</p>
            <p className="mb-3">Software Engineer</p>
            <p className="mt-3">paolo.b.frias@gmail.com</p>
            <p>443-910-6145</p>
            <p>Hanover, Maryland</p>
          </div>
          <div className="bg-gray-200 flex-1 px-6 pb-12">
            <p className="mt-12 font-semibold text-xl">Education</p>
            <p className="font-semibold">University of Maryland, Baltimore County</p>
            <p className="bottom-sep">(B.S. in Computer Science)</p>
            <p className="font-semibold">Online Certificates: </p>
            <span><p className="italic">Complete React Native and Redux Course (Udemy)</p></span>
            <p className="mt-6 font-semibold text-xl">Skills</p>
            <p className="font-semibold">Programming Languages</p>
            <p>Python, Golang, Javascript, C#</p>
            <p className="font-semibold mt-6">Frameworks and Libraries</p>
            <p>pytest, Django, GRPC framework, React, React-Native, Xamarin</p>
            <p className="font-semibold mt-6">Tools</p>
            <p>Hashicorp Suite (Terraform, Nomad, Vault), Amazon Web Services,  Git</p>
          </div>
        </div>
        <div className="p-6 bg-whitesmoke">
          <p className="font-semibold text-xl mb-6">Work Experience</p>
          <p className="font-semibold">Bluecore &middot; New York, NY (remote)</p>
          <p className="font-semibold">Senior Software Engineer &middot; May 2023 - January 2024</p>
          <ul className="list-disc list-outside ml-10">
            <li>Lead various data-quality and cost-saving projects for our identification capabilities - the biggest differentiator for Bluecore among competitors in the retail marketing space</li>
            <ul className="list-disc list-outside ml-10">
              <li>Verified parity between old and new customer data systems and handled deep investigations when our data strayed</li>
            </ul>
            <li>Conduct time-sensitive efforts to migrate code for our identification team out of end-of-life systems</li>
          </ul>
          <p className="font-semibold mt-6">ZeroFOX &middot; Baltimore, MD</p>
          <p className="font-semibold">Software Engineer &middot; February 2020 - March 2023</p>
          <ul className="list-disc list-outside ml-10">
            <li>Act as Technical Lead of a small team to drive innovation, quality, and scalability to several distributed services. This includes:</li>
            <ul className="list-disc list-outside ml-10">
              <li>Digital Risk Data Collection Pipelines</li>
              <ul className="list-disc list-outside ml-10">
                <li>Systems responsible for scanning with customer-configured data across multiple sources. These pipelines consist of distributed microservices and different backend/frontend layers. Communication was implemented with a combination of AWS resources (SNS, SQS), HTTP requests, and GRPC calls.</li>
              </ul>
              <li>Collection Metrics and Analysis</li>
              <ul className="list-disc list-outside ml-10">
                <li>Utilized various metrics tools (e.g. Redis, InfluxDB, Prometheus, Grafana, BigQuery, and proprietary solutions) to monitor and alert on system health, as well as drive business decisions</li>
              </ul>
              <li>Other responsibilities include system deployments, external and internal validation, and research into technical approaches/prototypes</li>
            </ul>
            <li>Contribute to quarterly roadmap planning processes, as well as agile processes, that facilitate efficient delivery of value to the business and department</li>
            <li>Maintain code repositories for multiple projects that are in use throughout different backend pipelines</li>
            <li>Mentor newer and lower-level hires in order to quickly onboard them onto teams</li>
          </ul>
          <p className="font-semibold mt-6">Smartlogic &middot; Baltimore, MD</p>
          <p className="font-semibold">Developer &middot; March 2018 - February 2020</p>
          <ul className="list-disc list-outside ml-10">
            <li>Lead React-Native development and project management efforts for several mobile application contracts</li>
            <li>Contribute to open-source software that is relevant to projects and libraries we rely on</li>
            <li>Dive into native platform code (Objective-C, Java) to patch third-party libraries and create custom functionality not available in our current framework</li>
            <li>Manage application deployment including test builds, app signing, and production releases</li>
            <li>Estimate future work for clients as part of our sales pipeline</li>
          </ul>
          <p className="font-semibold mt-6">UPS &middot; Timonium, MD</p>
          <p className="font-semibold">Applications Developer &middot; February 2017 - March 2018</p>
          <ul className="list-disc list-outside ml-10">
            <li>Use agile development methodologies to plan, develop, test, and deploy a mobile application that acts as the foundation for future UPS platforms</li>
            <li>Utilize Xamarin.Forms and Prism framework to lay down complex logic in a maintainable and clean fashion</li>
            <li>Show initiative while handling various tasks with minimal supervision (iOS project, Scanner-equipped Android Devices)</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
